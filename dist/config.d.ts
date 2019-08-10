interface IConfig {
    app: object;
    log?: object;
    mongo?: object;
    plugins?: object;
}
declare class Config {
    protected static config: IConfig;
    static loadConfigurations: (configFile: string) => {};
}
export { Config };
