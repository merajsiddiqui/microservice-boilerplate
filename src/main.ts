import { app } from "./app"
import * as http from "http"
import { Plugins } from "./plugins"
import { Config } from "./config"
import { dirname } from "path"
import * as fs from "fs"
import * as IP from "ip"

const configurationFilePath = dirname(__dirname) + "/config/app.conf"
const packageDetails = JSON.parse(
  fs.readFileSync(dirname(__dirname) + "/package.json", "utf-8")
)
let config: any
config = Config.loadConfigurations(configurationFilePath)
let AppConfiguration: any = []
AppConfiguration = [
  {
    Name: packageDetails.name,
    Env: config.app.environment,
    URL: "http://" + IP.address() + ":" + config.app.port,
    Author: packageDetails.author
  }
]
Plugins.loadPlugins()

const server = http.createServer(app)
server.listen(config.app.port)
server.on("listening", async () => {
  console.log(AppConfiguration)
})
