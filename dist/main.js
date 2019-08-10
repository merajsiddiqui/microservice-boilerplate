"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const plugins_1 = require("./plugins");
const config_1 = require("./config");
const path_1 = require("path");
const fs = require("fs");
const IP = require("ip");
const configurationFilePath = path_1.dirname(__dirname) + "/config/app.conf";
const packageDetails = JSON.parse(fs.readFileSync(path_1.dirname(__dirname) + "/package.json", "utf-8"));
let config;
config = config_1.Config.loadConfigurations(configurationFilePath);
let AppConfiguration = [];
AppConfiguration = [
    {
        Name: packageDetails.name,
        Env: config.app.environment,
        URL: "http://" + IP.address() + ":" + config.app.port,
        Author: packageDetails.author
    }
];
plugins_1.Plugins.loadPlugins();
const server = http.createServer(app_1.app);
server.listen(config.app.port);
server.on("listening", async () => {
    console.log(AppConfiguration);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLDZCQUE0QjtBQUM1Qix1Q0FBbUM7QUFDbkMscUNBQWlDO0FBQ2pDLCtCQUE4QjtBQUM5Qix5QkFBd0I7QUFDeEIseUJBQXdCO0FBRXhCLE1BQU0scUJBQXFCLEdBQUcsY0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGtCQUFrQixDQUFBO0FBQ3JFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQy9CLEVBQUUsQ0FBQyxZQUFZLENBQUMsY0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FDL0QsQ0FBQTtBQUNELElBQUksTUFBVyxDQUFBO0FBQ2YsTUFBTSxHQUFHLGVBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3pELElBQUksZ0JBQWdCLEdBQVEsRUFBRSxDQUFBO0FBQzlCLGdCQUFnQixHQUFHO0lBQ2pCO1FBQ0UsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1FBQ3pCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVc7UUFDM0IsR0FBRyxFQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSTtRQUNyRCxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU07S0FDOUI7Q0FDRixDQUFBO0FBQ0QsaUJBQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUVyQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQUcsQ0FBQyxDQUFBO0FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDL0IsQ0FBQyxDQUFDLENBQUEifQ==