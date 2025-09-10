import { cartService } from "../services/cart-service.js";
import { productService } from "../services/product-service.js";

class CartController {
  constructor(cService, pService) {
    this.cService = cService;
    this.pService = pService;
  }

  getAll = async (req, res, next) => {
    try {
      const carts = await this.cService.getAll();
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { cid } = req.params;
      const cart = await this.cService.getById(cid);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      let total = 0;
      const body = req.body;

      const products = body.products;
      if (!products) throw new CustomError("Products not found", 404);

      for (const cartItem of products) {
        const product = await this.pService.getById(cartItem.product);
        if (!product) throw new CustomError("Product not found", 404);
        total += (product.price * cartItem.quantity)
      }

      const cart = await this.cService.create(products, total);
      res.status(201).json(cart);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      let total = 0;
      const body = req.body;

      const products = body.products;
      if (!products) throw new CustomError("Products not found", 404);

      for (const cartItem of products) {
        const product = await this.pService.getById(cartItem.product);
        if (!product) throw new CustomError("Product not found", 404);
        total += (product.price * cartItem.quantity)
      }

      const cart = await this.cService.update(cid, products, total);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { cid } = req.params;
      const cart = await this.cService.delete(cid);
      res.status(200).json(cart);
    } catch (error) {
      next(error);
    }
  };
}

export const cartController = new CartController(cartService, productService);