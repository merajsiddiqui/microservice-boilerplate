import * as express from "express"
import { Get, Route, Request } from "tsoa"
@Route("/users")
export class UsersController {
  @Get("{id}")
  public async getUser(
    id: number,
    @Request() request: express.Request
  ): Promise<any> {
    return {
      message: "Hello World"
    }
  }
}
