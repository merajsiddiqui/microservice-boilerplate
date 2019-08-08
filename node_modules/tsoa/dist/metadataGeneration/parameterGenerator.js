"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var decoratorUtils_1 = require("./../utils/decoratorUtils");
var validatorUtils_1 = require("./../utils/validatorUtils");
var exceptions_1 = require("./exceptions");
var initializer_value_1 = require("./initializer-value");
var typeResolver_1 = require("./typeResolver");
var ParameterGenerator = /** @class */ (function () {
    function ParameterGenerator(parameter, method, path, current) {
        this.parameter = parameter;
        this.method = method;
        this.path = path;
        this.current = current;
    }
    ParameterGenerator.prototype.Generate = function () {
        var _this = this;
        var decoratorName = decoratorUtils_1.getDecoratorName(this.parameter, function (identifier) { return _this.supportParameterDecorator(identifier.text); });
        switch (decoratorName) {
            case 'Request':
                return this.getRequestParameter(this.parameter);
            case 'Body':
                return this.getBodyParameter(this.parameter);
            case 'BodyProp':
                return this.getBodyPropParameter(this.parameter);
            case 'Header':
                return this.getHeaderParameter(this.parameter);
            case 'Query':
                return this.getQueryParameter(this.parameter);
            case 'Path':
                return this.getPathParameter(this.parameter);
            default:
                return this.getPathParameter(this.parameter);
        }
    };
    ParameterGenerator.prototype.getRequestParameter = function (parameter) {
        var parameterName = parameter.name.text;
        return {
            description: this.getParameterDescription(parameter),
            in: 'request',
            name: parameterName,
            parameterName: parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type: { dataType: 'object' },
            validators: validatorUtils_1.getParameterValidators(this.parameter, parameterName),
        };
    };
    ParameterGenerator.prototype.getBodyPropParameter = function (parameter) {
        var parameterName = parameter.name.text;
        var type = this.getValidatedType(parameter);
        if (!this.supportBodyMethod(this.method)) {
            throw new exceptions_1.GenerateMetadataError("@BodyProp('" + parameterName + "') Can't support in " + this.method.toUpperCase() + " method.");
        }
        return {
            default: initializer_value_1.getInitializerValue(parameter.initializer, type),
            description: this.getParameterDescription(parameter),
            in: 'body-prop',
            name: decoratorUtils_1.getDecoratorTextValue(this.parameter, function (ident) { return ident.text === 'BodyProp'; }) || parameterName,
            parameterName: parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type: type,
            validators: validatorUtils_1.getParameterValidators(this.parameter, parameterName),
        };
    };
    ParameterGenerator.prototype.getBodyParameter = function (parameter) {
        var parameterName = parameter.name.text;
        var type = this.getValidatedType(parameter);
        if (!this.supportBodyMethod(this.method)) {
            throw new exceptions_1.GenerateMetadataError("@Body('" + parameterName + "') Can't support in " + this.method.toUpperCase() + " method.");
        }
        return {
            description: this.getParameterDescription(parameter),
            in: 'body',
            name: parameterName,
            parameterName: parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type: type,
            validators: validatorUtils_1.getParameterValidators(this.parameter, parameterName),
        };
    };
    ParameterGenerator.prototype.getHeaderParameter = function (parameter) {
        var parameterName = parameter.name.text;
        var type = this.getValidatedType(parameter, false);
        if (!this.supportPathDataType(type)) {
            throw new exceptions_1.GenerateMetadataError("@Header('" + parameterName + "') Can't support '" + type.dataType + "' type.");
        }
        return {
            default: initializer_value_1.getInitializerValue(parameter.initializer, type),
            description: this.getParameterDescription(parameter),
            in: 'header',
            name: decoratorUtils_1.getDecoratorTextValue(this.parameter, function (ident) { return ident.text === 'Header'; }) || parameterName,
            parameterName: parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            type: type,
            validators: validatorUtils_1.getParameterValidators(this.parameter, parameterName),
        };
    };
    ParameterGenerator.prototype.getQueryParameter = function (parameter) {
        var parameterName = parameter.name.text;
        var type = this.getValidatedType(parameter, false);
        var commonProperties = {
            default: initializer_value_1.getInitializerValue(parameter.initializer, type),
            description: this.getParameterDescription(parameter),
            in: 'query',
            name: decoratorUtils_1.getDecoratorTextValue(this.parameter, function (ident) { return ident.text === 'Query'; }) || parameterName,
            parameterName: parameterName,
            required: !parameter.questionToken && !parameter.initializer,
            validators: validatorUtils_1.getParameterValidators(this.parameter, parameterName),
        };
        if (type.dataType === 'array') {
            var arrayType = type;
            if (!this.supportPathDataType(arrayType.elementType)) {
                throw new exceptions_1.GenerateMetadataError("@Query('" + parameterName + "') Can't support array '" + arrayType.elementType.dataType + "' type.");
            }
            return __assign({}, commonProperties, { collectionFormat: 'multi', type: arrayType });
        }
        if (!this.supportPathDataType(type)) {
            throw new exceptions_1.GenerateMetadataError("@Query('" + parameterName + "') Can't support '" + type.dataType + "' type.");
        }
        return __assign({}, commonProperties, { type: type });
    };
    ParameterGenerator.prototype.getPathParameter = function (parameter) {
        var parameterName = parameter.name.text;
        var type = this.getValidatedType(parameter, false);
        var pathName = decoratorUtils_1.getDecoratorTextValue(this.parameter, function (ident) { return ident.text === 'Path'; }) || parameterName;
        if (!this.supportPathDataType(type)) {
            throw new exceptions_1.GenerateMetadataError("@Path('" + parameterName + "') Can't support '" + type.dataType + "' type.");
        }
        if (!this.path.includes("{" + pathName + "}")) {
            throw new exceptions_1.GenerateMetadataError("@Path('" + parameterName + "') Can't match in URL: '" + this.path + "'.");
        }
        return {
            default: initializer_value_1.getInitializerValue(parameter.initializer, type),
            description: this.getParameterDescription(parameter),
            in: 'path',
            name: pathName,
            parameterName: parameterName,
            required: true,
            type: type,
            validators: validatorUtils_1.getParameterValidators(this.parameter, parameterName),
        };
    };
    ParameterGenerator.prototype.getParameterDescription = function (node) {
        var symbol = this.current.typeChecker.getSymbolAtLocation(node.name);
        if (!symbol) {
            return undefined;
        }
        var comments = symbol.getDocumentationComment(this.current.typeChecker);
        if (comments.length) {
            return ts.displayPartsToString(comments);
        }
        return undefined;
    };
    ParameterGenerator.prototype.supportBodyMethod = function (method) {
        return ['post', 'put', 'patch'].some(function (m) { return m === method.toLowerCase(); });
    };
    ParameterGenerator.prototype.supportParameterDecorator = function (decoratorName) {
        return ['header', 'query', 'parem', 'body', 'bodyprop', 'request'].some(function (d) { return d === decoratorName.toLocaleLowerCase(); });
    };
    ParameterGenerator.prototype.supportPathDataType = function (parameterType) {
        return ['string', 'integer', 'long', 'float', 'double', 'date', 'datetime', 'buffer', 'boolean', 'enum', 'any'].find(function (t) { return t === parameterType.dataType; });
    };
    ParameterGenerator.prototype.getValidatedType = function (parameter, extractEnum) {
        if (extractEnum === void 0) { extractEnum = true; }
        var typeNode = parameter.type;
        if (!typeNode) {
            var type = this.current.typeChecker.getTypeAtLocation(parameter);
            typeNode = this.current.typeChecker.typeToTypeNode(type);
        }
        return new typeResolver_1.TypeResolver(typeNode, this.current, parameter, extractEnum).resolve();
    };
    return ParameterGenerator;
}());
exports.ParameterGenerator = ParameterGenerator;
//# sourceMappingURL=parameterGenerator.js.map