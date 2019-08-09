import * as express from "express"

const RequestLog = (
  logger: any,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  next()
}

export { RequestLog }
