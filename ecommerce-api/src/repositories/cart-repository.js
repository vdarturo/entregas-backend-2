import { cartDao } from "../daos/cart-dao.js";
import CustomError from "../utils/custom-error.js";

class CartRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => {
    try {
      return await this.dao.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      const cart = await this.dao.getById(id);
      if (!cart) throw new CustomError("Cart not found", 404);
      return cart;
    } catch (error) {
      throw error;
    }
  };

  create = async (body) => {
    try {
      const cart = await this.dao.create(body);
      if (!cart) throw new CustomError("Cart creation failed", 400);
      return cart;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, body) => {
    try {
      const cart = await this.dao.update(id, body);
      if (!cart) throw new CustomError("Cart not found for update", 404);
      return cart;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const cart = await this.dao.delete(id);
      if (!cart)
        throw new CustomError("Cart not found for deletion", 404);
      return cart;
    } catch (error) {
      throw error;
    }
  };
}

export const cartRepository = new CartRepository(cartDao);