import { Tsoa } from '../metadataGeneration/tsoa';
import { RoutesConfig } from './../config';
export declare class RouteGenerator {
    private readonly metadata;
    private readonly options;
    private tsfmtConfig;
    constructor(metadata: Tsoa.Metadata, options: RoutesConfig);
    GenerateRoutes(middlewareTemplate: string, pathTransformer: (path: string) => string): Promise<void>;
    GenerateCustomRoutes(template: string, pathTransformer: (path: string) => string): Promise<void>;
    private buildContent;
    private buildModels;
    private getRelativeImportPath;
    private buildPropertySchema;
    private buildParameterSchema;
    private buildProperty;
}
