import * as express from "express";
declare const RequestLog: (logger: any, request: express.Request, response: express.Response, next: express.NextFunction) => void;
export { RequestLog };
