import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const router = Router();

router.get('/',userController.getAllUsers);
router.post('/',userController.createUser);
router.put('/:pid',userController.updateUser);
router.delete('/:pid',userController.deleteUser);

export default router;