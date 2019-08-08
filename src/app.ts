// import * as methodOverride from "method-override"
import * as express from "express"
import { Plugins } from "./plugins"
import { Config } from "./config"
import { dirname } from "path"
// import * as bodyParser from "body-parser"
// import {RegisterRoutes} from "./routes"
// import { UserRouter } from "./routes/user"

const configurationFilePath = dirname(__dirname) + "/config/app.conf"
let config: any
const microServiceLoader = async () => {
  config = await Config.loadConfigurations(configurationFilePath)
  Plugins.loadPlugins()
  const app = express()
  app.get("/", (req, res) => {
    res.send({
      data: config
    })
  })
  app.listen(config.app.port, () => {
    console.log(
      ` Service Started at port 127.0.0.1:${config.app.port} in ${config.app.environment} mode`
    )
  })
}
microServiceLoader()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(methodOverride())
// RegisterRoutes(app)
