import * as ts from 'typescript';
import { SwaggerConfig } from '../config';
import { Tsoa } from '../metadataGeneration/tsoa';
export declare const generateSwaggerSpec: (config: SwaggerConfig, compilerOptions?: ts.CompilerOptions | undefined, ignorePaths?: string[] | undefined, metadata?: Tsoa.Metadata | undefined) => Promise<Tsoa.Metadata>;
