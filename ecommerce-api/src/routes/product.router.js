import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const router = Router();

router.get('/',productController.getAllProducts);
router.post('/',productController.createProduct);
router.put('/:pid',productController.updateProduct);
router.delete('/:pid',productController.deleteProduct);

export default router;