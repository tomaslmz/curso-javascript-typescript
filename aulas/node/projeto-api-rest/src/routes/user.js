import { Router } from 'express';
import controller from '../controllers/user';

const router = new Router();

router.post('/create', controller.create);

router.get('/list', controller.read);

router.delete('/delete/:id', controller.delete);

router.patch('/update/:id', controller.update);

export default router;
