import { Router } from 'express';
import adminCreateRoutes from './create/adminCreate.routes';
import adminFindOneRoutes from './findOne/adminFindOne.routes';

const router = Router();

router.use(adminCreateRoutes);
router.use(adminFindOneRoutes);

export default router;
