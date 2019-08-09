import { User } from "../components/user"

class UserController {

  public getUser = (id: number): User => {
    const newUser: User = {
      id: id,
      name : {
        first : "Meraj Ahmad",
        last: "Siddiqui"
      },
      email : "merajsiddiqui@outlook.com",
      phoneNumbers : [ "+91-9990166950" ]
    }
    return newUser
  }
}

export {UserController}