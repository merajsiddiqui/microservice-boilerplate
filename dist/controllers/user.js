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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxjQUFjO0lBQXBCO1FBQ1MsWUFBTyxHQUFHLENBQUMsRUFBVSxFQUFRLEVBQUU7WUFDcEMsTUFBTSxPQUFPLEdBQVM7Z0JBQ3BCLEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsSUFBSSxFQUFFLFVBQVU7aUJBQ2pCO2dCQUNELEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ2pDLENBQUE7WUFDRCxPQUFPLE9BQU8sQ0FBQTtRQUNoQixDQUFDLENBQUE7SUFDSCxDQUFDO0NBQUE7QUFFUSx3Q0FBYyJ9