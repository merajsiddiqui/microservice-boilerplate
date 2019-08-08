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
}
microServiceLoader()
const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(methodOverride())
// RegisterRoutes(app)

app.get("/", (req, res) => {
    res.send({
        data: config
    })
})

app.listen(3000)