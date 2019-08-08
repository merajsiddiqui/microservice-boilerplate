"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var decoratorUtils_1 = require("./../utils/decoratorUtils");
var exceptions_1 = require("./exceptions");
var methodGenerator_1 = require("./methodGenerator");
var security_1 = require("./security");
var ControllerGenerator = /** @class */ (function () {
    function ControllerGenerator(node, current) {
        this.node = node;
        this.current = current;
        this.path = this.getPath();
        this.tags = this.getTags();
        this.security = this.getSecurity();
    }
    ControllerGenerator.prototype.IsValid = function () {
        return !!this.path || this.path === '';
    };
    ControllerGenerator.prototype.Generate = function () {
        if (!this.node.parent) {
            throw new exceptions_1.GenerateMetadataError('Controller node doesn\'t have a valid parent source file.');
        }
        if (!this.node.name) {
            throw new exceptions_1.GenerateMetadataError('Controller node doesn\'t have a valid name.');
        }
        var sourceFile = this.node.parent.getSourceFile();
        return {
            location: sourceFile.fileName,
            methods: this.buildMethods(),
            name: this.node.name.text,
            path: this.path || '',
        };
    };
    ControllerGenerator.prototype.buildMethods = function () {
        var _this = this;
        return this.node.members
            .filter(function (m) { return m.kind === ts.SyntaxKind.MethodDeclaration; })
            .map(function (m) { return new methodGenerator_1.MethodGenerator(m, _this.current, _this.tags, _this.security); })
            .filter(function (generator) { return generator.IsValid(); })
            .map(function (generator) { return generator.Generate(); });
    };
    ControllerGenerator.prototype.getPath = function () {
        var decorators = decoratorUtils_1.getDecorators(this.node, function (identifier) { return identifier.text === 'Route'; });
        if (!decorators || !decorators.length) {
            return;
        }
        if (decorators.length > 1) {
            throw new exceptions_1.GenerateMetadataError("Only one Route decorator allowed in '" + this.node.name.text + "' class.");
        }
        var decorator = decorators[0];
        var expression = decorator.parent;
        var decoratorArgument = expression.arguments[0];
        return decoratorArgument ? "" + decoratorArgument.text : '';
    };
    ControllerGenerator.prototype.getTags = function () {
        var decorators = decoratorUtils_1.getDecorators(this.node, function (identifier) { return identifier.text === 'Tags'; });
        if (!decorators || !decorators.length) {
            return;
        }
        if (decorators.length > 1) {
            throw new exceptions_1.GenerateMetadataError("Only one Tags decorator allowed in '" + this.node.name.text + "' class.");
        }
        var decorator = decorators[0];
        var expression = decorator.parent;
        return expression.arguments.map(function (a) { return a.text; });
    };
    ControllerGenerator.prototype.getSecurity = function () {
        var securityDecorators = decoratorUtils_1.getDecorators(this.node, function (identifier) { return identifier.text === 'Security'; });
        if (!securityDecorators || !securityDecorators.length) {
            return [];
        }
        return security_1.getSecurities(securityDecorators);
    };
    return ControllerGenerator;
}());
exports.ControllerGenerator = ControllerGenerator;
//# sourceMappingURL=controllerGenerator.js.map