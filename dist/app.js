"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const path_1 = require("path");
const routes_1 = require("./routes/routes");
const swaggerUi = require("swagger-ui-express");
/** import all your routes here */
require("./routes/user");
/** End of Routes */
const app = express();
exports.app = app;
app.use(bodyparser.json());
console.log("Going to render routes");
try {
    routes_1.RegisterRoutes(app);
}
catch (e) {
    console.log(e);
}
try {
    const swaggerDocument = require("../swagger.json");
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use("/coverage", express.static(path_1.dirname(__dirname) + "/coverage"));
}
catch (err) {
    console.error("Unable to read swagger.json", err);
}
// It's important that this come after the main routes are registered
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .send(err.message || "An error occurred during the request.");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUNsQywwQ0FBeUM7QUFDekMsK0JBQThCO0FBQzlCLDRDQUFnRDtBQUNoRCxnREFBK0M7QUFFL0Msa0NBQWtDO0FBQ2xDLHlCQUFzQjtBQUV0QixvQkFBb0I7QUFDcEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUE7QUFnQ1osa0JBQUc7QUEvQlosR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7QUFDckMsSUFBSTtJQUNGLHVCQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7Q0FDcEI7QUFBQyxPQUFPLENBQUMsRUFBRTtJQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDZjtBQUVELElBQUk7SUFDRixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUNuRSxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFBO0NBQ3ZFO0FBQUMsT0FBTyxHQUFHLEVBQUU7SUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFBO0NBQ2xEO0FBRUQscUVBQXFFO0FBQ3JFLEdBQUcsQ0FBQyxHQUFHLENBQ0wsQ0FDRSxHQUFRLEVBQ1IsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtJQUNGLEdBQUc7U0FDQSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7U0FDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksdUNBQXVDLENBQUMsQ0FBQTtBQUNqRSxDQUFDLENBQ0YsQ0FBQSJ9