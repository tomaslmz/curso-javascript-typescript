import { Router } from 'express';
import controller from '../controllers/photo';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/store', loginRequired, controller.store);

export default router;
