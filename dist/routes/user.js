"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const user_1 = require("../controllers/user");
let UsersRouter = class UsersRouter {
    async getUser(id) {
        return new user_1.UserController().getUser(id);
    }
    async createUser(requestBody) {
        // this.setStatus(201) // set return status 201
        return Promise.resolve();
    }
};
__decorate([
    tsoa_1.Get("/{id}"),
    __param(0, tsoa_1.Path("id"))
], UsersRouter.prototype, "getUser", null);
__decorate([
    tsoa_1.SuccessResponse("201", "Created") // Custom success response
    ,
    tsoa_1.Post(),
    __param(0, tsoa_1.Body())
], UsersRouter.prototype, "createUser", null);
UsersRouter = __decorate([
    tsoa_1.Route("users")
], UsersRouter);
exports.UsersRouter = UsersRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQVdhO0FBRWIsOENBQW9EO0FBRXBELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFFZixLQUFLLENBQUMsT0FBTyxDQUFhLEVBQVU7UUFDekMsT0FBTyxJQUFJLHFCQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUlNLEtBQUssQ0FBQyxVQUFVLENBQ2IsV0FBZ0M7UUFFeEMsK0NBQStDO1FBQy9DLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzFCLENBQUM7Q0FDRixDQUFBO0FBWkM7SUFEQyxVQUFHLENBQUMsT0FBTyxDQUFDO0lBQ1MsV0FBQSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7MENBRS9CO0FBSUQ7SUFGQyxzQkFBZSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQywwQkFBMEI7O0lBQzVELFdBQUksRUFBRTtJQUVKLFdBQUEsV0FBSSxFQUFFLENBQUE7NkNBSVI7QUFiVSxXQUFXO0lBRHZCLFlBQUssQ0FBQyxPQUFPLENBQUM7R0FDRixXQUFXLENBY3ZCO0FBZFksa0NBQVcifQ==