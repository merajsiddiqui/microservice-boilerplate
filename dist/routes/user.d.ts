import { Controller as Router } from "tsoa";
import { User, UserCreationRequest } from "../components/user";
export declare class UsersRouter extends Router {
    getUser(id: number): Promise<User>;
    createUser(requestBody: UserCreationRequest): Promise<void>;
}
