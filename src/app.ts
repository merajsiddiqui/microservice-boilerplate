import * as express from "express"
import * as bodyparser from "body-parser"

import { RegisterRoutes } from "./routes/routes"
import * as swaggerUi from "swagger-ui-express"

/** import all your routes here */
import "./routes/user"

/** End of Routes */
const app = express()
app.use(bodyparser.json())
RegisterRoutes(app)
try {
  const swaggerDocument = require("../swagger.json")
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
} catch (err) {
  console.error("Unable to read swagger.json", err)
}

export { app }
