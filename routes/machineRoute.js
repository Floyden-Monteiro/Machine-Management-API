import { Router } from 'express';
import machine from '../controllers/machineController.js';

const router = Router();

router.get('/machine', machine);

export default router;
