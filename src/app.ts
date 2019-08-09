// import * as methodOverride from "method-override"
import * as express from "express"
import { Plugins } from "./plugins"
import { Config } from "./config"
import { dirname } from "path"
import * as art from "ascii-art"
import * as fs from "fs"
import * as IP from "ip"

// import * as bodyParser from "body-parser"
// import {RegisterRoutes} from "./routes"
// import { UserRouter } from "./routes/user"

const configurationFilePath = dirname(__dirname) + "/config/app.conf"
const packageDetails = JSON.parse(fs.readFileSync(
    dirname(__dirname) + "/package.json", "utf-8"))
let config: any
const microServiceLoader = async () => {
  config = await Config.loadConfigurations(configurationFilePath)
  let AppConfiguration: any = []
  AppConfiguration = [{
    Name: packageDetails.name,
    "Env." :  config.app.environment,
    URL : "http://" + IP.address() + ":" + config.app.port,
    Author: packageDetails.author
  }]
  Plugins.loadPlugins()
  const app = express()
  app.listen(config.app.port, async () => {
    await art.font("Micro Service", "Doom", (rendered) => {
      console.log(rendered)
      art.table({
        width: 300,
        data : AppConfiguration,
        bars : "double",
        headerStyle : "yellow",
        dataStyle : "bright_white",
        borderColor : "gray"
      }, (render) => {
        console.log(render)
      })
    })
  })
}
microServiceLoader()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(methodOverride())
// RegisterRoutes(app)
