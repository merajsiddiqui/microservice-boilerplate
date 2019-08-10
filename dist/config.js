"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Config {
}
Config.loadConfigurations = (configFile) => {
    /**
     * Check if configuration file
     */
    if (!fs.existsSync(configFile)) {
        throw new Error(`${configFile} Not found!`);
    }
    const cFileContent = fs.readFileSync(configFile, "utf-8");
    const configurations = cFileContent.split(/\r?\n/);
    const loadedConfig = {};
    let service = "";
    for (let i = 0; i < configurations.length; i++) {
        if (configurations[i].indexOf(";") !== 0 &&
            configurations[i].indexOf("#") !== 0) {
            if (configurations[i].indexOf("[") === 0) {
                service = configurations[i].replace(/\[/g, "").replace(/]/g, "");
            }
            else {
                if (configurations[i].length !== 0) {
                    const [setting, value] = configurations[i].split("=");
                    if (loadedConfig[service] === undefined) {
                        loadedConfig[service] = {};
                    }
                    loadedConfig[service][setting.trim()] = value.trim();
                }
            }
        }
    }
    return loadedConfig;
};
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF3QjtBQVF4QixNQUFNLE1BQU07O0FBR0kseUJBQWtCLEdBQUcsQ0FBQyxVQUFrQixFQUFFLEVBQUU7SUFDeEQ7O09BRUc7SUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsVUFBVSxhQUFhLENBQUMsQ0FBQTtLQUM1QztJQUNELE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3pELE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEQsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFBO0lBQ3ZCLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQTtJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QyxJQUNFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNwQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFDcEM7WUFDQSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTthQUNqRTtpQkFBTTtnQkFDTCxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3JELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtxQkFDM0I7b0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtpQkFDckQ7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLFlBQVksQ0FBQTtBQUNyQixDQUFDLENBQUE7QUFHTSx3QkFBTSJ9