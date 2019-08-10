"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
const tsoa_1 = require("tsoa");
const models = {};
const validationService = new tsoa_1.ValidationService(models);
function RegisterRoutes(app) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsK0JBTWE7QUFHYixNQUFNLE1BQU0sR0FBcUIsRUFBRSxDQUFBO0FBQ25DLE1BQU0saUJBQWlCLEdBQUcsSUFBSSx3QkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUV2RCxTQUFnQixjQUFjLENBQUMsR0FBb0I7SUFDakQsU0FBUyxZQUFZLENBQUMsTUFBVztRQUMvQixPQUFPLENBQ0wsWUFBWSxJQUFJLE1BQU0sSUFBSSxXQUFXLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxNQUFNLENBQ3pFLENBQUE7SUFDSCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQ3JCLGFBQWtCLEVBQ2xCLE9BQVksRUFDWixRQUFhLEVBQ2IsSUFBUztRQUVULE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDNUIsSUFBSSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxVQUFVLENBQUE7WUFDZCxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO29CQUM1QyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtnQkFDbkMsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsVUFBVSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUN2QztZQUVELElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQzFCLGtDQUFrQztnQkFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzlDO2lCQUFNO2dCQUNMLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFTLEVBQUUsT0FBWTtRQUMvQyxNQUFNLFdBQVcsR0FBZ0IsRUFBRSxDQUFBO1FBQ25DLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUE7WUFDM0IsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNwQixLQUFLLFNBQVM7b0JBQ1osT0FBTyxPQUFPLENBQUE7Z0JBQ2hCLEtBQUssT0FBTztvQkFDVixPQUFPLGlCQUFpQixDQUFDLGFBQWEsQ0FDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQ25CLElBQUksRUFDSixXQUFXLENBQ1osQ0FBQTtnQkFDSCxLQUFLLE1BQU07b0JBQ1QsT0FBTyxpQkFBaUIsQ0FBQyxhQUFhLENBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDVCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUNwQixJQUFJLEVBQ0osV0FBVyxDQUNaLENBQUE7Z0JBQ0gsS0FBSyxRQUFRO29CQUNYLE9BQU8saUJBQWlCLENBQUMsYUFBYSxDQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ1QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDcEIsSUFBSSxFQUNKLFdBQVcsQ0FDWixDQUFBO2dCQUNILEtBQUssTUFBTTtvQkFDVCxPQUFPLGlCQUFpQixDQUFDLGFBQWEsQ0FDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNULE9BQU8sQ0FBQyxJQUFJLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxJQUFJLEdBQUcsR0FBRyxDQUNYLENBQUE7Z0JBQ0gsS0FBSyxXQUFXO29CQUNkLE9BQU8saUJBQWlCLENBQUMsYUFBYSxDQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDbEIsSUFBSSxFQUNKLFdBQVcsRUFDWCxPQUFPLENBQ1IsQ0FBQTthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxNQUFNLElBQUksb0JBQWEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7U0FDekM7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7QUFDSCxDQUFDO0FBdEZELHdDQXNGQyJ9