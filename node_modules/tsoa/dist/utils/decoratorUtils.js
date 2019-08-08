"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initializer_value_1 = require("../metadataGeneration/initializer-value");
function getDecorators(node, isMatching) {
    var decorators = node.decorators;
    if (!decorators || !decorators.length) {
        return [];
    }
    return decorators
        .map(function (e) {
        while (e.expression !== undefined) {
            e = e.expression;
        }
        return e;
    })
        .filter(isMatching);
}
exports.getDecorators = getDecorators;
function getDecoratorName(node, isMatching) {
    var decorators = getDecorators(node, isMatching);
    if (!decorators || !decorators.length) {
        return;
    }
    return decorators[0].text;
}
exports.getDecoratorName = getDecoratorName;
function getDecoratorTextValue(node, isMatching) {
    var decorators = getDecorators(node, isMatching);
    if (!decorators || !decorators.length) {
        return;
    }
    var expression = decorators[0].parent;
    var expArguments = expression.arguments;
    if (!expArguments || !expArguments.length) {
        return;
    }
    return expArguments[0].text;
}
exports.getDecoratorTextValue = getDecoratorTextValue;
function getDecoratorOptionValue(node, isMatching) {
    var decorators = getDecorators(node, isMatching);
    if (!decorators || !decorators.length) {
        return;
    }
    var expression = decorators[0].parent;
    var expArguments = expression.arguments;
    if (!expArguments || !expArguments.length) {
        return;
    }
    return initializer_value_1.getInitializerValue(expArguments[0]);
}
exports.getDecoratorOptionValue = getDecoratorOptionValue;
function isDecorator(node, isMatching) {
    var decorators = getDecorators(node, isMatching);
    if (!decorators || !decorators.length) {
        return false;
    }
    return true;
}
exports.isDecorator = isDecorator;
//# sourceMappingURL=decoratorUtils.js.map