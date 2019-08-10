"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
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
app_1.app.listen(config.app.port, () => {
    console.log(AppConfiguration);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJCO0FBQzNCLHVDQUFtQztBQUNuQyxxQ0FBaUM7QUFDakMsK0JBQThCO0FBQzlCLHlCQUF3QjtBQUN4Qix5QkFBd0I7QUFFeEIsTUFBTSxxQkFBcUIsR0FBRyxjQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsa0JBQWtCLENBQUE7QUFDckUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDL0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUMvRCxDQUFBO0FBQ0QsSUFBSSxNQUFXLENBQUE7QUFDZixNQUFNLEdBQUcsZUFBTSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDekQsSUFBSSxnQkFBZ0IsR0FBUSxFQUFFLENBQUE7QUFDOUIsZ0JBQWdCLEdBQUc7SUFDakI7UUFDRSxJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7UUFDekIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVztRQUMzQixHQUFHLEVBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJO1FBQ3JELE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTTtLQUM5QjtDQUNGLENBQUE7QUFDRCxpQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFBO0FBRXJCLFNBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvQixDQUFDLENBQUMsQ0FBQSJ9