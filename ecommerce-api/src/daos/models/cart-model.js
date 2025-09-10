import { Schema, model } from "mongoose";

const CartSchema = new Schema({
  products:[{
    product:{
      type: Schema.Types.ObjectId,
      ref: "product"
    },
    quantity:{
      type: Number,
      required: true
    }
  }],
  total: {
      type: Number,
      required: true
  }
});

export const CartModel = model("carts", CartSchema);