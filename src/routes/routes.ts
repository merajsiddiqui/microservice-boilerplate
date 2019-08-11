/* tslint:disable */
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute
} from "tsoa"
import { UsersRouter } from "./user"
import * as express from "express"

const models: TsoaRoute.Models = {
  Name: {
    properties: {
      first: { dataType: "string", required: true },
      last: { dataType: "string" }
    }
  },
  getUserResponseSuccess: {
    properties: {
      id: { dataType: "string", required: true },
      email: { dataType: "string", required: true },
      name: { ref: "Name", required: true },
      status: { dataType: "enum", enums: ["Happy", "Sad"] },
      phoneNumbers: {
        dataType: "array",
        array: { dataType: "string" },
        required: true
      }
    }
  },
  ErrorResponse: {
    properties: {
      code: { dataType: "string", required: true },
      message: { dataType: "string", required: true }
    }
  },
  createUserRequest: {
    properties: {
      email: { dataType: "string", required: true },
      name: { ref: "Name", required: true },
      phoneNumbers: {
        dataType: "array",
        array: { dataType: "string" },
        required: true
      }
    }
  },
  createUserResponseSuccess: {
    properties: {
      sucecess: { dataType: "boolean", required: true },
      data: { ref: "createUserRequest", required: true }
    }
  },
  updateUserRequestBody: {
    properties: {
      id: { dataType: "string", required: true },
      email: { dataType: "string", required: true }
    }
  },
  updateUserResponse: {
    properties: {
      success: { dataType: "boolean", required: true },
      data: { ref: "updateUserRequestBody", required: true },
      userId: { dataType: "double", required: true }
    }
  }
}
const validationService = new ValidationService(models)

export function RegisterRoutes(app: express.Express) {
  app.get("/users/:id", function(request: any, response: any, next: any) {
    const args = {
      id: {
        in: "path",
        name: "id",
        required: true,
        dataType: "string",
        validators: { minLength: { value: 24 }, maxLength: { value: 30 } }
      }
    }

    let validatedArgs: any[] = []
    try {
      validatedArgs = getValidatedArgs(args, request)
    } catch (err) {
      return next(err)
    }

    const controller = new UsersRouter()

    const promise = controller.getUser.apply(controller, validatedArgs as any)
    promiseHandler(controller, promise, response, next)
  })
  app.post("/users", function(request: any, response: any, next: any) {
    const args = {
      requestBody: {
        in: "body",
        name: "requestBody",
        required: true,
        ref: "createUserRequest"
      }
    }

    let validatedArgs: any[] = []
    try {
      validatedArgs = getValidatedArgs(args, request)
    } catch (err) {
      return next(err)
    }

    const controller = new UsersRouter()

    const promise = controller.createUser.apply(
      controller,
      validatedArgs as any
    )
    promiseHandler(controller, promise, response, next)
  })
  app.put("/users/update", function(request: any, response: any, next: any) {
    const args = {
      data: {
        in: "body",
        name: "data",
        required: true,
        ref: "updateUserRequestBody"
      }
    }

    let validatedArgs: any[] = []
    try {
      validatedArgs = getValidatedArgs(args, request)
    } catch (err) {
      return next(err)
    }

    const controller = new UsersRouter()

    const promise = controller.updateUser.apply(
      controller,
      validatedArgs as any
    )
    promiseHandler(controller, promise, response, next)
  })

  function isController(object: any): object is Controller {
    return (
      "getHeaders" in object && "getStatus" in object && "setStatus" in object
    )
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode
        if (isController(controllerObj)) {
          const headers = controllerObj.getHeaders()
          Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name])
          })

          statusCode = controllerObj.getStatus()
        }

        if (data || data === false) {
          // === false allows boolean result
          response.status(statusCode || 200).json(data)
        } else {
          response.status(statusCode || 204).end()
        }
      })
      .catch((error: any) => next(error))
  }

  function getValidatedArgs(args: any, request: any): any[] {
    const fieldErrors: FieldErrors = {}
    const values = Object.keys(args).map(key => {
      const name = args[key].name
      switch (args[key].in) {
        case "request":
          return request
        case "query":
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors
          )
        case "path":
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors
          )
        case "header":
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors
          )
        case "body":
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            name + "."
          )
        case "body-prop":
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            "body."
          )
      }
    })
    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, "")
    }
    return values
  }
}
