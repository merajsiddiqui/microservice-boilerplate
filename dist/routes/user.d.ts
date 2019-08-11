import { Controller as Router } from "tsoa";
import { getUserResponseSuccess, createUserRequest, createUserResponseSuccess, updateUserRequestBody, updateUserResponse } from "../components/user";
export declare class UsersRouter extends Router {
    /**
     * @param id Unique user id which is an uuid
     * @minLength id 24
     * @maxLength id 30
     */
    getUser(id: string): Promise<getUserResponseSuccess>;
    createUser(requestBody: createUserRequest): Promise<createUserResponseSuccess>;
    updateUser(data: updateUserRequestBody): Promise<updateUserResponse>;
}
