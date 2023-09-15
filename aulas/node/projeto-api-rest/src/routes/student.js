import { Router } from 'express';
import controller from '../controllers/student';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, controller.index);
router.post('/create', loginRequired, controller.create);
router.get('/list', loginRequired, controller.read);
router.delete('/delete/:id', loginRequired, controller.delete);
router.patch('/update/:id', loginRequired, controller.update);

export default router;
