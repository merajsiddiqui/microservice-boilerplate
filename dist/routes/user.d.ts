import { User, UserCreationRequest } from "../components/user";
export declare class UsersRouter {
    getUser(id: number): Promise<User>;
    createUser(requestBody: UserCreationRequest): Promise<void>;
}
