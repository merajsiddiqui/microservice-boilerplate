import {
  Get,
  Post,
  Route,
  Body,
  Query,
  Header,
  Path,
  SuccessResponse,
  Controller as Router
} from "tsoa"
import { User, UserCreationRequest } from "../components/user"
import { UserController } from "../controllers/user"
@Route("/users")
export class UsersRouter extends Router {
  @Get("/{id}")
  public async getUser(@Path("id") id: number): Promise<User> {
    return new UserController().getUser(id)
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationRequest
  ): Promise<void> {
    this.setStatus(201) // set return status 201
    return Promise.resolve()
  }
}
