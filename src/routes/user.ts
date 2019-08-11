import {
  Get,
  Post,
  Route,
  Body,
  Path,
  SuccessResponse,
  Controller as Router,
  Response,
  Put
} from "tsoa"
import {
  getUserResponseSuccess,
  createUserRequest,
  createUserResponseSuccess,
  updateUserRequestBody,
  updateUserResponse
} from "../components/user"
import { UserController } from "../controllers/user"
import { ErrorResponse } from "../components/response"
@Route("users")
export class UsersRouter extends Router {
  /**
   * @param id Unique user id which is an uuid
   * @minLength id 24
   * @maxLength id 30
   */
  @Response<ErrorResponse>(404, "Not Found")
  @Response<ErrorResponse>(401, "Not Authorized")
  @Get("{id}")
  public async getUser(
    @Path("id") id: string
  ): Promise<getUserResponseSuccess> {
    return new UserController().getUser(id)
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: createUserRequest
  ): Promise<createUserResponseSuccess> {
    this.setStatus(201) // set return status 201
    return Promise.resolve(<createUserResponseSuccess>{})
  }

  @Put("update")
  @Response<ErrorResponse>(204, "some invalid data")
  public async updateUser(
    @Body() data: updateUserRequestBody
  ): Promise<updateUserResponse> {
    this.setStatus(204)
    return <updateUserResponse>{}
  }
}
