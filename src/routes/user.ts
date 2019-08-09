import {
  Get,
  Post,
  Route,
  Body,
  Query,
  Header,
  Path,
  SuccessResponse,
  Controller
} from "tsoa"
import { User, UserCreationRequest } from "../models/user"

@Route("Users")
export class UsersController extends Controller {
  @Get("{id}")
  public async getUser(id: number, @Query() name: string): Promise<User> {
    const user: User = {
      id: 1,
      email: "msiddiqui.jmi@gmail.com",
      name: {
        first: "Meraj Ahmad",
        last: "Siddiqui"
      },
      phoneNumbers: ["9990166950"]
    }
    return user
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationRequest
  ): Promise<void> {
    this.setStatus(201) // set return status 201
    return Promise.resolve()
  }

  @Get("{id}")
  public async getPrivateUser(
    @Path("id") ID: number,
    @Header("Authorization") authorization: string
  ): Promise<User> {
    const user: User = {
      id: 1,
      email: "msiddiqui.jmi@gmail.com",
      name: {
        first: "Meraj Ahmad",
        last: "Siddiqui"
      },
      phoneNumbers: ["9990166950"]
    }
    return user
  }
}
