import { UserComponent } from "../components/user"
/**
 * @method create
 * @method delete
 */
class UserController {
  /**
   * @param {Object} user
   * @returns {Object} user
   */
  public create = async (user: UserComponent.IUser) => {
    return user
  }

  /**
   * @param {string} id
   * @returns {object}
   */
  public delete = async (id: string) => {
    return { success: true }
  }

  public get = async (id: number): Promise<UserComponent.IUser> => {
    const user: UserComponent.IUser = {
      firstName: "Meraj Ahmad",
      lastName: "Siddiqui",
      age: 24,
      emailId: `msiddiqui.jmi${id}@gmail.com`
    }
    return user
  }
}

export { UserController }
