import { Router } from 'express';
import controller from '../controllers/user';

const router = new Router();

router.post('/create', controller.create);

router.get('/list', controller.read);

router.delete('/delete', controller.delete);

router.patch('/update', controller.update);

export default router;
