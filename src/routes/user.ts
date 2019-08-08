import { Get, Route, Controller as Router } from "tsoa"
import { UserController } from "../controllers/user"
import { UserComponent } from "../components/user"

@Route("User")
class UserRouter extends Router {
  @Get()
  public getUser = async (id: number): Promise<UserComponent.IUser> => {
    return await new UserController().get(id)
  }
}

export { UserRouter }
