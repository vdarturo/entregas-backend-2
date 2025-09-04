import { Router } from 'express';
import cartController from '../controllers/cart.controller.js';

const router = Router();

router.get('/',cartController.getAllCarts);
router.post('/',cartController.createCart);
router.put('/:pid',cartController.updateCart);
router.delete('/:pid',cartController.deleteCart);

export default router;