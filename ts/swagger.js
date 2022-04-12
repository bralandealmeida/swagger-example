const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const outputFile = './swagger_output.json';
// const endpointsFiles = ['./dist/shared/infra/http/server.js'];
const endpointsFiles = ['./src/shared/infra/http/server.ts'];

swaggerAutogen(outputFile, endpointsFiles);