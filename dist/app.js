"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const routes_1 = require("./routes/routes");
const swaggerUi = require("swagger-ui-express");
const methodOverride = require("method-override");
/** import all your routes here */
require("./routes/user");
/** End of Routes */
const app = express();
exports.app = app;
try {
    const swaggerDocument = require("../swagger.json");
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
catch (err) {
    console.error("Unable to read swagger.json", err);
}
app.use(bodyparser.json());
app.use(methodOverride());
routes_1.RegisterRoutes(app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUNsQywwQ0FBeUM7QUFDekMsNENBQWdEO0FBQ2hELGdEQUErQztBQUMvQyxrREFBaUQ7QUFFakQsa0NBQWtDO0FBQ2xDLHlCQUFzQjtBQUV0QixvQkFBb0I7QUFDcEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUE7QUFZWixrQkFBRztBQVZaLElBQUk7SUFDRixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtDQUNwRTtBQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQTtDQUNsRDtBQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO0FBQ3pCLHVCQUFjLENBQUMsR0FBRyxDQUFDLENBQUEifQ==