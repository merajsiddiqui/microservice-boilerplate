"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.getUser = (id) => {
            const newUser = {
                id: id,
                name: {
                    first: "Meraj Ahmad",
                    last: "Siddiqui"
                },
                email: "merajsiddiqui@outlook.com",
                phoneNumbers: ["+91-9990166950"]
            };
            return newUser;
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxjQUFjO0lBQXBCO1FBQ1MsWUFBTyxHQUFHLENBQUMsRUFBVSxFQUErQixFQUFFO1lBQzNELE1BQU0sT0FBTyxHQUFnQztnQkFDM0MsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxhQUFhO29CQUNwQixJQUFJLEVBQUUsVUFBVTtpQkFDakI7Z0JBQ0QsS0FBSyxFQUFFLDJCQUEyQjtnQkFDbEMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDakMsQ0FBQTtZQUNELE9BQU8sT0FBTyxDQUFBO1FBQ2hCLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQTtBQUVRLHdDQUFjIn0=