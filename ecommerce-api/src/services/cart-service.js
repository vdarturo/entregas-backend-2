import { cartRepository } from "../repositories/cart-repository.js";
import CustomError from "../utils/custom-error.js";

class CartService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async () => {
    try {
      return await this.repository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      const cart = await this.repository.getById(id);
      if (!cart) throw new CustomError("Cart not found", 404);
      return cart;
    } catch (error) {
      throw error;
    }
  };

  create = async (products, total) => {
    
    try {
      const cart = {
        products: products,
        total: total
      }
      
      const newCart = await this.repository.create(cart);
      if (!newCart) throw new CustomError("Cart creation failed", 400);
      return newCart;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, products, total) => {
    try {
      const cart = {
        products: products,
        total: total
      }

      const newCart = await this.repository.update(id, cart);
      if (!newCart) throw new CustomError("Cart not found for update", 404);
      return newCart;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const cart = await this.repository.delete(id);
      if (!cart)
        throw new CustomError("Cart not found for deletion", 404);
      return cart;
    } catch (error) {
      throw error;
    }
  };

  async addProduct(cart, product, quantity){
    try{
      let total = 0
      cart.products.push({product: product, quantity: quantity});
      
      cart.products.forEach(function(item) {
          total += item.product.price;
      });

      cart.total = total;
      await cart.save();
    } catch (error) {
      throw error;
    }
  };

  async removeProduct(cart, pid){
    try{
      let total = 0
      const products = cart.products.filter(product => product._id != pid);
      
      cart.products = products;
      cart.products.forEach(function(product) {
        total += product.price 
      });

      cart.total = total;
      return await cartModel.updateOne({_id: cart._id}, cart);
    } catch (error) {
      throw error;
    }
  };
}

export const cartService = new CartService(cartRepository);