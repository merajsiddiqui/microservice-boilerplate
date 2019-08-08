import * as ts from 'typescript';
import { RoutesConfig } from '../config';
import { Tsoa } from '../metadataGeneration/tsoa';
export declare const generateRoutes: (routesConfig: RoutesConfig, compilerOptions?: ts.CompilerOptions | undefined, ignorePaths?: string[] | undefined, metadata?: Tsoa.Metadata | undefined) => Promise<Tsoa.Metadata>;
