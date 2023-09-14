import { Router } from 'express';
import controller from '../controllers/student';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, controller.index);
router.post('/create', loginRequired, controller.create);
router.get('/list', loginRequired, controller.read);

export default router;
