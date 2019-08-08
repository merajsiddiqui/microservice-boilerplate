// import * as methodOverride from "method-override"
import * as express from "express"
// import * as bodyParser from "body-parser"
// import {RegisterRoutes} from "./routes"
// import { UserRouter } from "./routes/user"

const app = express()
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(methodOverride())
// RegisterRoutes(app)

app.get('/', (req, res) => {
    res.send({
        data: "Hello world"
    })
})

app.listen(3000)