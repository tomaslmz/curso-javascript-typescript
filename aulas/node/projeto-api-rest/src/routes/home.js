import { Router } from 'express';
import controller from '../controllers/home';

const router = new Router();

router.get('/', controller.index);

export default router;
