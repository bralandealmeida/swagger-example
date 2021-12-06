import express from 'express';
import appRouter from './routes/app.routes';

import swaggerUi from 'swagger-ui-express'; 
import swaggerFile from '../swagger_output.json';

const app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(appRouter);

app.listen(3333, () => console.log('Server started on port 3333'));
