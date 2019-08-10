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
};
__decorate([
    tsoa_1.Response(404, "Not Found"),
    tsoa_1.Response(401, "Not Authorized"),
    tsoa_1.Get("/{id}"),
    tsoa_1.Tags("user", "get user by id", "user by id"),
    __param(0, tsoa_1.Path("id"))
], UsersRouter.prototype, "getUser", null);
__decorate([
    tsoa_1.SuccessResponse("201", "Created") // Custom success response
    ,
    tsoa_1.Post(),
    __param(0, tsoa_1.Body())
], UsersRouter.prototype, "createUser", null);
UsersRouter = __decorate([
    tsoa_1.Route("/users")
], UsersRouter);
exports.UsersRouter = UsersRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQVlhO0FBRWIsOENBQW9EO0FBR3BELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxpQkFBTTtJQUNyQzs7OztPQUlHO0lBS0ksS0FBSyxDQUFDLE9BQU8sQ0FDTixFQUFVO1FBRXRCLE9BQU8sSUFBSSxxQkFBYyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFJTSxLQUFLLENBQUMsVUFBVSxDQUNiLFdBQW1DO1FBRTNDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyx3QkFBd0I7UUFDNUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFpQyxFQUFFLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0NBQ0YsQ0FBQTtBQWRDO0lBSkMsZUFBUSxDQUFnQixHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQ3pDLGVBQVEsQ0FBZ0IsR0FBRyxFQUFFLGdCQUFnQixDQUFDO0lBQzlDLFVBQUcsQ0FBQyxPQUFPLENBQUM7SUFDWixXQUFJLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztJQUUxQyxXQUFBLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTswQ0FHWjtBQUlEO0lBRkMsc0JBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsMEJBQTBCOztJQUM1RCxXQUFJLEVBQUU7SUFFSixXQUFBLFdBQUksRUFBRSxDQUFBOzZDQUlSO0FBdkJVLFdBQVc7SUFEdkIsWUFBSyxDQUFDLFFBQVEsQ0FBQztHQUNILFdBQVcsQ0F3QnZCO0FBeEJZLGtDQUFXIn0=