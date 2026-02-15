import { Router } from 'express';
import { AdminFindOneController } from './adminFindOne.controller';

const router = Router();
const controller = new AdminFindOneController();

router.get('/:id', (req, res) => controller.findOne(req, res));

export default router;
