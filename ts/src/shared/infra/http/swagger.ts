import SwaggerAutoGen from 'swagger-autogen';
import path from 'path';

const outputFile = path.resolve(__dirname, '..', '..', '..', '..', 'swagger_output.json');
const endpointsFiles = [ path.resolve(__dirname, './server.ts') ];

SwaggerAutoGen({ openapi: '3.0.0' })(outputFile, endpointsFiles);