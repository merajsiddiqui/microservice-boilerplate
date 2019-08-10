import * as User from "../components/user";
declare class UserController {
    getUser: (id: string) => User.getUserResponseSuccess;
}
export { UserController };
