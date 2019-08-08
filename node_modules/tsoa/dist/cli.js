#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var YAML = require("yamljs");
var yargs = require("yargs");
var generate_routes_1 = require("./module/generate-routes");
var generate_swagger_spec_1 = require("./module/generate-swagger-spec");
var fs_1 = require("./utils/fs");
var workingDir = process.cwd();
var packageJson;
var getPackageJsonValue = function (key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    return __awaiter(_this, void 0, void 0, function () {
        var packageJsonRaw, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!packageJson) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs_1.fsReadFile(workingDir + "/package.json")];
                case 2:
                    packageJsonRaw = _a.sent();
                    packageJson = JSON.parse(packageJsonRaw.toString('utf8'));
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, defaultValue];
                case 4: return [2 /*return*/, packageJson[key] || ''];
            }
        });
    });
};
var nameDefault = function () { return getPackageJsonValue('name', 'TSOA'); };
var versionDefault = function () { return getPackageJsonValue('version', '1.0.0'); };
var descriptionDefault = function () { return getPackageJsonValue('description', 'Build swagger-compliant REST APIs using TypeScript and Node'); };
var licenseDefault = function () { return getPackageJsonValue('license', 'MIT'); };
var getConfig = function (configPath) {
    if (configPath === void 0) { configPath = 'tsoa.json'; }
    return __awaiter(_this, void 0, void 0, function () {
        var config, ext, configRaw, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ext = path.extname(configPath);
                    if (!(ext === '.yaml' || ext === '.yml')) return [3 /*break*/, 1];
                    config = YAML.load(configPath);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, fs_1.fsReadFile(workingDir + "/" + configPath)];
                case 2:
                    configRaw = _a.sent();
                    config = JSON.parse(configRaw.toString('utf8'));
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    if (err_2.code === 'MODULE_NOT_FOUND') {
                        throw Error("No config file found at '" + configPath + "'");
                    }
                    else if (err_2.name === 'SyntaxError') {
                        // tslint:disable-next-line:no-console
                        console.error(err_2);
                        throw Error("Invalid JSON syntax in config at '" + configPath + "': " + err_2.message);
                    }
                    else {
                        // tslint:disable-next-line:no-console
                        console.error(err_2);
                        throw Error("Unhandled error encountered loading '" + configPath + "': " + err_2.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, config];
            }
        });
    });
};
var validateCompilerOptions = function (config) {
    return config || {};
};
exports.validateSwaggerConfig = function (config) { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                if (!config.outputDirectory) {
                    throw new Error('Missing outputDirectory: configuration must contain output directory.');
                }
                if (!config.entryFile) {
                    throw new Error('Missing entryFile: Configuration must contain an entry point file.');
                }
                return [4 /*yield*/, fs_1.fsExists(config.entryFile)];
            case 1:
                if (!(_j.sent())) {
                    throw new Error("EntryFile not found: " + config.entryFile + " - Please check your tsoa config.");
                }
                _a = config;
                _b = config.version;
                if (_b) return [3 /*break*/, 3];
                return [4 /*yield*/, versionDefault()];
            case 2:
                _b = (_j.sent());
                _j.label = 3;
            case 3:
                _a.version = _b;
                config.specVersion = config.specVersion || 2;
                if (config.specVersion !== 2 && config.specVersion !== 3) {
                    throw new Error('Unsupported Spec version.');
                }
                _c = config;
                _d = config.name;
                if (_d) return [3 /*break*/, 5];
                return [4 /*yield*/, nameDefault()];
            case 4:
                _d = (_j.sent());
                _j.label = 5;
            case 5:
                _c.name = _d;
                _e = config;
                _f = config.description;
                if (_f) return [3 /*break*/, 7];
                return [4 /*yield*/, descriptionDefault()];
            case 6:
                _f = (_j.sent());
                _j.label = 7;
            case 7:
                _e.description = _f;
                _g = config;
                _h = config.license;
                if (_h) return [3 /*break*/, 9];
                return [4 /*yield*/, licenseDefault()];
            case 8:
                _h = (_j.sent());
                _j.label = 9;
            case 9:
                _g.license = _h;
                config.basePath = config.basePath || '/';
                return [2 /*return*/, config];
        }
    });
}); };
var validateRoutesConfig = function (config) { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!config.entryFile) {
                    throw new Error('Missing entryFile: Configuration must contain an entry point file.');
                }
                return [4 /*yield*/, fs_1.fsExists(config.entryFile)];
            case 1:
                if (!(_e.sent())) {
                    throw new Error("EntryFile not found: " + config.entryFile + " - Please check your tsoa config.");
                }
                if (!config.routesDir) {
                    throw new Error('Missing routesDir: Configuration must contain a routes file output directory.');
                }
                _a = config.authenticationModule;
                if (!_a) return [3 /*break*/, 5];
                return [4 /*yield*/, fs_1.fsExists(config.authenticationModule)];
            case 2:
                _b = (_e.sent());
                if (_b) return [3 /*break*/, 4];
                return [4 /*yield*/, fs_1.fsExists(config.authenticationModule + '.ts')];
            case 3:
                _b = (_e.sent());
                _e.label = 4;
            case 4:
                _a = !(_b);
                _e.label = 5;
            case 5:
                if (_a) {
                    throw new Error("No authenticationModule file found at '" + config.authenticationModule + "'");
                }
                _c = config.iocModule;
                if (!_c) return [3 /*break*/, 9];
                return [4 /*yield*/, fs_1.fsExists(config.iocModule)];
            case 6:
                _d = (_e.sent());
                if (_d) return [3 /*break*/, 8];
                return [4 /*yield*/, fs_1.fsExists(config.iocModule + '.ts')];
            case 7:
                _d = (_e.sent());
                _e.label = 8;
            case 8:
                _c = !(_d);
                _e.label = 9;
            case 9:
                if (_c) {
                    throw new Error("No iocModule file found at '" + config.iocModule + "'");
                }
                config.basePath = config.basePath || '/';
                config.middleware = config.middleware || 'express';
                return [2 /*return*/, config];
        }
    });
}); };
var configurationArgs = {
    alias: 'c',
    describe: 'tsoa configuration file; default is tsoa.json in the working directory',
    required: false,
    type: 'string',
};
var hostArgs = {
    describe: 'API host',
    required: false,
    type: 'string',
};
var basePathArgs = {
    describe: 'Base API path',
    required: false,
    type: 'string',
};
var yarmlArgs = {
    describe: 'Swagger spec yaml format',
    required: false,
    type: 'boolean',
};
var jsonArgs = {
    describe: 'Swagger spec json format',
    required: false,
    type: 'boolean',
};
yargs
    .usage('Usage: $0 <command> [options]')
    .demand(1)
    .command('swagger', 'Generate swagger spec', {
    basePath: basePathArgs,
    configuration: configurationArgs,
    host: hostArgs,
    json: jsonArgs,
    yaml: yarmlArgs,
}, swaggerSpecGenerator)
    .command('routes', 'Generate routes', {
    basePath: basePathArgs,
    configuration: configurationArgs,
}, routeGenerator)
    .help('help')
    .alias('help', 'h')
    .argv;
function swaggerSpecGenerator(args) {
    return __awaiter(this, void 0, void 0, function () {
        var config, compilerOptions, swaggerConfig, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getConfig(args.configuration)];
                case 1:
                    config = _a.sent();
                    if (args.basePath) {
                        config.swagger.basePath = args.basePath;
                    }
                    if (args.host) {
                        config.swagger.host = args.host;
                    }
                    if (args.yaml) {
                        config.swagger.yaml = args.yaml;
                    }
                    if (args.json) {
                        config.swagger.yaml = false;
                    }
                    compilerOptions = validateCompilerOptions(config.compilerOptions);
                    return [4 /*yield*/, exports.validateSwaggerConfig(config.swagger)];
                case 2:
                    swaggerConfig = _a.sent();
                    return [4 /*yield*/, generate_swagger_spec_1.generateSwaggerSpec(swaggerConfig, compilerOptions, config.ignore)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    // tslint:disable-next-line:no-console
                    console.error('Generate swagger error.\n', err_3);
                    process.exit(1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function routeGenerator(args) {
    return __awaiter(this, void 0, void 0, function () {
        var config, compilerOptions, routesConfig, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getConfig(args.configuration)];
                case 1:
                    config = _a.sent();
                    if (args.basePath) {
                        config.routes.basePath = args.basePath;
                    }
                    compilerOptions = validateCompilerOptions(config.compilerOptions);
                    return [4 /*yield*/, validateRoutesConfig(config.routes)];
                case 2:
                    routesConfig = _a.sent();
                    return [4 /*yield*/, generate_routes_1.generateRoutes(routesConfig, compilerOptions, config.ignore)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _a.sent();
                    // tslint:disable-next-line:no-console
                    console.error('Generate routes error.\n', err_4);
                    process.exit(1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=cli.js.map