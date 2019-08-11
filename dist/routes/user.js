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
let UsersRouter = class UsersRouter extends tsoa_1.Controller {
    /**
     * @param id Unique user id which is an uuid
     * @minLength id 24
     * @maxLength id 30
     */
    async getUser(id) {
        return new user_1.UserController().getUser(id);
    }
    async createUser(requestBody) {
        this.setStatus(201); // set return status 201
        return Promise.resolve({});
    }
    async updateUser(data) {
        this.setStatus(204);
        return {};
    }
};
__decorate([
    tsoa_1.Response(404, "Not Found"),
    tsoa_1.Response(401, "Not Authorized"),
    tsoa_1.Get("{id}"),
    __param(0, tsoa_1.Path("id"))
], UsersRouter.prototype, "getUser", null);
__decorate([
    tsoa_1.SuccessResponse("201", "Created") // Custom success response
    ,
    tsoa_1.Post(),
    __param(0, tsoa_1.Body())
], UsersRouter.prototype, "createUser", null);
__decorate([
    tsoa_1.Put("update"),
    tsoa_1.Response(204, "some invalid data"),
    __param(0, tsoa_1.Body())
], UsersRouter.prototype, "updateUser", null);
UsersRouter = __decorate([
    tsoa_1.Route("users")
], UsersRouter);
exports.UsersRouter = UsersRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQVVhO0FBUWIsOENBQW9EO0FBR3BELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxpQkFBTTtJQUNyQzs7OztPQUlHO0lBSUksS0FBSyxDQUFDLE9BQU8sQ0FDTixFQUFVO1FBRXRCLE9BQU8sSUFBSSxxQkFBYyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFJTSxLQUFLLENBQUMsVUFBVSxDQUNiLFdBQThCO1FBRXRDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyx3QkFBd0I7UUFDNUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUE0QixFQUFFLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBSU0sS0FBSyxDQUFDLFVBQVUsQ0FDYixJQUEyQjtRQUVuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLE9BQTJCLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0NBQ0YsQ0FBQTtBQXZCQztJQUhDLGVBQVEsQ0FBZ0IsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN6QyxlQUFRLENBQWdCLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5QyxVQUFHLENBQUMsTUFBTSxDQUFDO0lBRVQsV0FBQSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7MENBR1o7QUFJRDtJQUZDLHNCQUFlLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLDBCQUEwQjs7SUFDNUQsV0FBSSxFQUFFO0lBRUosV0FBQSxXQUFJLEVBQUUsQ0FBQTs2Q0FJUjtBQUlEO0lBRkMsVUFBRyxDQUFDLFFBQVEsQ0FBQztJQUNiLGVBQVEsQ0FBZ0IsR0FBRyxFQUFFLG1CQUFtQixDQUFDO0lBRS9DLFdBQUEsV0FBSSxFQUFFLENBQUE7NkNBSVI7QUEvQlUsV0FBVztJQUR2QixZQUFLLENBQUMsT0FBTyxDQUFDO0dBQ0YsV0FBVyxDQWdDdkI7QUFoQ1ksa0NBQVcifQ==