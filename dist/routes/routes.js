"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
const tsoa_1 = require("tsoa");
const user_1 = require("./user");
const models = {
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
};
const validationService = new tsoa_1.ValidationService(models);
function RegisterRoutes(app) {
    app.get("/users/:id", function (request, response, next) {
        const args = {
            id: {
                in: "path",
                name: "id",
                required: true,
                dataType: "string",
                validators: { minLength: { value: 24 }, maxLength: { value: 30 } }
            }
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new user_1.UsersRouter();
        const promise = controller.getUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.post("/users", function (request, response, next) {
        const args = {
            requestBody: {
                in: "body",
                name: "requestBody",
                required: true,
                ref: "createUserRequest"
            }
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new user_1.UsersRouter();
        const promise = controller.createUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.put("/users/update", function (request, response, next) {
        const args = {
            data: {
                in: "body",
                name: "data",
                required: true,
                ref: "updateUserRequestBody"
            }
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new user_1.UsersRouter();
        const promise = controller.updateUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    function isController(object) {
        return ("getHeaders" in object && "getStatus" in object && "setStatus" in object);
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode;
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.set(name, headers[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            if (data || data === false) {
                // === false allows boolean result
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch((error) => next(error));
    }
    function getValidatedArgs(args, request) {
        const fieldErrors = {};
        const values = Object.keys(args).map(key => {
            const name = args[key].name;
            switch (args[key].in) {
                case "request":
                    return request;
                case "query":
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
                case "path":
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
                case "header":
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
                case "body":
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + ".");
                case "body-prop":
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, "body.");
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, "");
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsK0JBTWE7QUFDYixpQ0FBb0M7QUFHcEMsTUFBTSxNQUFNLEdBQXFCO0lBQy9CLElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUM3QyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO1NBQzdCO0tBQ0Y7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDMUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQzdDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNyQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNyRCxZQUFZLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRjtLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQzVDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtTQUNoRDtLQUNGO0lBQ0QsaUJBQWlC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