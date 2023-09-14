import { Router } from 'express';
import controller from '../controllers/token';

const router = new Router();

router.post('/create', controller.create);

export default router;
