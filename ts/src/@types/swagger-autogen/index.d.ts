declare module 'swagger-autogen' {
  type ArgsOptions = {
    openapi?: string,          // Enable/Disable OpenAPI. By default is null
    language?: string,         // Change response language. By default is 'en-US'
    disableLogs?: boolean,     // Enable/Disable logs. By default is false
    autoHeaders?: boolean,     // Enable/Disable automatic headers capture. By default is true
    autoQuery?: boolean,       // Enable/Disable automatic query capture. By default is true
    autoBody?: boolean         // Enable/Disable automatic body capture. By default is true
  }

  export default function SwaggerAutogen(args: ArgsOptions): (outputFile: any, appRoutes: any, doc?: any) => Promise<any>;
};