import { Router } from 'express';
import testRouter from '@modules/test/infra/routes/test.routes';

const router = Router();

router.use('/test', testRouter);

export default router;