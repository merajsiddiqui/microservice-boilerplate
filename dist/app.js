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
app.use((req, res, next) => {
    req.stringValue = "fancyStringForContext";
    next();
});
try {
    const swaggerDocument = require("../swagger.json");
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use("/coverage", express.static(path_1.dirname(__dirname) + "/coverage"));
}
catch (err) {
    console.error("Unable to read swagger.json", err);
}
routes_1.RegisterRoutes(app);
// It's important that this come after the main routes are registered
app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .send(err.message || "An error occurred during the request.");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUNsQywwQ0FBeUM7QUFDekMsK0JBQThCO0FBQzlCLDRDQUFnRDtBQUNoRCxnREFBK0M7QUFFL0Msa0NBQWtDO0FBQ2xDLHlCQUFzQjtBQUV0QixvQkFBb0I7QUFDcEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUE7QUE2Qlosa0JBQUc7QUE1QlosR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTLEVBQUUsRUFBRTtJQUN4QyxHQUFHLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFBO0lBQ3pDLElBQUksRUFBRSxDQUFBO0FBQ1IsQ0FBQyxDQUFDLENBQUE7QUFDRixJQUFJO0lBQ0YsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFDbkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQTtDQUN2RTtBQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQTtDQUNsRDtBQUNELHVCQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFbkIscUVBQXFFO0FBQ3JFLEdBQUcsQ0FBQyxHQUFHLENBQ0wsQ0FDRSxHQUFRLEVBQ1IsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtJQUNGLEdBQUc7U0FDQSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7U0FDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksdUNBQXVDLENBQUMsQ0FBQTtBQUNqRSxDQUFDLENBQ0YsQ0FBQSJ9