/// <reference types="node" />
import { TsoaRoute } from './tsoa-route';
export declare function ValidateParam(property: TsoaRoute.PropertySchema, value: any, generatedModels: TsoaRoute.Models, name: string | undefined, fieldErrors: FieldErrors, parent?: string): any;
export declare class ValidationService {
    private readonly models;
    constructor(models: TsoaRoute.Models);
    ValidateParam(property: TsoaRoute.PropertySchema, value: any, name: string | undefined, fieldErrors: FieldErrors, parent?: string): any;
    validateInt(name: string, value: any, fieldErrors: FieldErrors, validators?: IntegerValidator, parent?: string): number | undefined;
    validateFloat(name: string, value: any, fieldErrors: FieldErrors, validators?: FloatValidator, parent?: string): number | undefined;
    validateEnum(name: string, value: any, fieldErrors: FieldErrors, members?: string[], parent?: string): any;
    validateDate(name: string, value: any, fieldErrors: FieldErrors, validators?: DateValidator, parent?: string): Date | undefined;
    validateDateTime(name: string, value: any, fieldErrors: FieldErrors, validators?: DateTimeValidator, parent?: string): Date | undefined;
    validateString(name: string, value: any, fieldErrors: FieldErrors, validators?: StringValidator, parent?: string): string | undefined;
    validateBool(name: string, value: any, fieldErrors: FieldErrors, validators?: BooleanValidator, parent?: string): any;
    validateArray(name: string, value: any[], fieldErrors: FieldErrors, schema?: TsoaRoute.PropertySchema, validators?: ArrayValidator, parent?: string): any[] | undefined;
    validateBuffer(name: string, value: string): Buffer;
    validateModel(name: string, value: any, refName: string, fieldErrors: FieldErrors, parent?: string): any;
}
export interface IntegerValidator {
    isInt?: {
        errorMsg?: string;
    };
    isLong?: {
        errorMsg?: string;
    };
    minimum?: {
        value: number;
        errorMsg?: string;
    };
    maximum?: {
        value: number;
        errorMsg?: string;
    };
}
export interface FloatValidator {
    isFloat?: {
        errorMsg?: string;
    };
    isDouble?: {
        errorMsg?: string;
    };
    minimum?: {
        value: number;
        errorMsg?: string;
    };
    maximum?: {
        value: number;
        errorMsg?: string;
    };
}
export interface DateValidator {
    isDate?: {
        errorMsg?: string;
    };
    minDate?: {
        value: string;
        errorMsg?: string;
    };
    maxDate?: {
        value: string;
        errorMsg?: string;
    };
}
export interface DateTimeValidator {
    isDateTime?: {
        errorMsg?: string;
    };
    minDate?: {
        value: string;
        errorMsg?: string;
    };
    maxDate?: {
        value: string;
        errorMsg?: string;
    };
}
export interface StringValidator {
    isString?: {
        errorMsg?: string;
    };
    minLength?: {
        value: number;
        errorMsg?: string;
    };
    maxLength?: {
        value: number;
        errorMsg?: string;
    };
    pattern?: {
        value: string;
        errorMsg?: string;
    };
}
export interface BooleanValidator {
    isArray?: {
        errorMsg?: string;
    };
}
export interface ArrayValidator {
    isArray?: {
        errorMsg?: string;
    };
    minItems?: {
        value: number;
        errorMsg?: string;
    };
    maxItems?: {
        value: number;
        errorMsg?: string;
    };
    uniqueItems?: {
        errorMsg?: string;
    };
}
export declare type Validator = IntegerValidator | FloatValidator | DateValidator | DateTimeValidator | StringValidator | BooleanValidator | ArrayValidator;
export interface FieldErrors {
    [name: string]: {
        message: string;
        value?: any;
    };
}
export interface Exception extends Error {
    status: number;
}
export declare class ValidateError implements Exception {
    fields: FieldErrors;
    message: string;
    status: number;
    name: string;
    constructor(fields: FieldErrors, message: string);
}
export * from './tsoa-route';
