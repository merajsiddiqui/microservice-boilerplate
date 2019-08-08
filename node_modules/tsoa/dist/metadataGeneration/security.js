"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var initializer_value_1 = require("./initializer-value");
function getSecurities(decorators) {
    var securities = [];
    for (var _i = 0, decorators_1 = decorators; _i < decorators_1.length; _i++) {
        var sec = decorators_1[_i];
        var expression = sec.parent;
        var security = {};
        if (expression.arguments[0].kind === ts.SyntaxKind.StringLiteral) {
            var name_1 = expression.arguments[0].text;
            security[name_1] = expression.arguments[1] ? expression.arguments[1].elements.map(function (e) { return e.text; }) : [];
        }
        else {
            var properties = expression.arguments[0].properties;
            for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
                var property = properties_1[_a];
                var name_2 = property.name.text;
                var scopes = initializer_value_1.getInitializerValue(property.initializer);
                security[name_2] = scopes;
            }
        }
        securities.push(security);
    }
    return securities;
}
exports.getSecurities = getSecurities;
//# sourceMappingURL=security.js.map