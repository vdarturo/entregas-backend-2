import MongoDao from "./mongo-dao.js";
import { CartModel } from "./models/cart-model.js";

class CartDao extends MongoDao {
    constructor(model) {
        super(model);
    }
}

export const cartDao = new CartDao(CartModel);