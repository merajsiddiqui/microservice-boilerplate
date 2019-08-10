import * as express from "express"
import * as bodyparser from "body-parser"
import { dirname } from "path"
import { RegisterRoutes } from "./routes/routes"
import * as swaggerUi from "swagger-ui-express"

/** import all your routes here */
import "./routes/user"

/** End of Routes */
const app = express()
app.use(bodyparser.json())

console.log("Going to render routes")
try {
  RegisterRoutes(app)
} catch (e) {
  console.log(e)
}

try {
  const swaggerDocument = require("../swagger.json")
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  app.use("/coverage", express.static(dirname(__dirname) + "/coverage"))
} catch (err) {
  console.error("Unable to read swagger.json", err)
}

// It's important that this come after the main routes are registered
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res
      .status(err.status || 500)
      .send(err.message || "An error occurred during the request.")
  }
)

export { app }
