import { Router } from 'express';

import TestController from '@modules/test/infra/controllers/TestController'

const testController = new TestController();

const testRouter = Router();

testRouter.get('/', testController.index);

export default testRouter;