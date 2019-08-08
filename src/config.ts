import * as fs from "fs"
interface IConfig {
  app: object
  log?: object
  mongo?: object
  plugins?: object
}

class Config {
  protected static config: IConfig

  public static loadConfigurations = (configFile: string) => {
    /**
     * Check if configuration file
     */
    if (!fs.existsSync(configFile)) {
      throw new Error(`${configFile} Not found!`)
    }
    const cFileContent = fs.readFileSync(configFile, "utf-8")
    const configurations = cFileContent.split(/\r?\n/)
    const loadedConfig = {}
    let service: string = ""
    for (let i = 0; i < configurations.length; i++) {
      if (
        configurations[i].indexOf(";") !== 0 &&
        configurations[i].indexOf("#") !== 0
      ) {
        if (configurations[i].indexOf("[") === 0) {
          service = configurations[i].replace(/\[/g, "").replace(/]/g, "")
        } else {
          if (configurations[i].length !== 0) {
            const [setting, value] = configurations[i].split("=")
            if (loadedConfig[service] === undefined) {
              loadedConfig[service] = {}
            }
            loadedConfig[service][setting.trim()] = value.trim()
          }
        }
      }
    }

    return loadedConfig
  }
}

export { Config }
