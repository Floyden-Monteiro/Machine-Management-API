import { Router } from 'express';
import {
  createMachine,
  deleteMachine,
  getMachines,
  updateMachine,
} from '../controllers/machineController.js';

const router = Router();

router
  .get('/machines', getMachines)
  .post('/machine', createMachine)
  .put('/machine/:id', updateMachine)

  .delete('/machine/:id', deleteMachine);

export default router;
