import express, { Request, Response } from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import fs from 'fs';

const app = express();

app.get('/', (request: Request, response: Response) => {
  const { name, version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  return response.json({ name, version })
});

app.use(routes);

const swaggerFilePath = async () => await import(path.resolve(__dirname, '..', '..', '..', '..', 'swagger_output.json'))
swaggerFilePath().then((jsonFile) => app.use('/doc', swaggerUi.serve, swaggerUi.setup(jsonFile)))

app.listen(3000, () => console.log('App running at 3000'));