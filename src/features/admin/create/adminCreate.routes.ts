import { Router } from 'express';
import { AdminCreateController } from './adminCreate.controller';

const router = Router();
const controller = new AdminCreateController();

router.post('/', (req, res) => controller.create(req, res));

export default router;
