import { Router } from 'express';
import AppController from '../controllers/AppController';

const appController = new AppController();

const appRoutes = Router();

appRoutes.get('/', appController.index);
appRoutes.get('/show/:name', appController.show);

export default appRoutes;