import { Controller as Router } from "tsoa";
import * as User from "../components/user";
export declare class UsersRouter extends Router {
    /**
     * @param id Unique user id which is an uuid
     * @minLength id 24
     * @maxLength id 30
     */
    getUser(id: string): Promise<User.getUserResponseSuccess>;
    createUser(requestBody: User.createUserRequest): Promise<User.createUserResponseSuccess>;
}
