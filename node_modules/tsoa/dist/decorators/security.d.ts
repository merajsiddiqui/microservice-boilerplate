/**
 * @param {name} security name from securityDefinitions
 */
export declare function Security(name: string | {
    [name: string]: string[];
}, scopes?: string[]): Function;
