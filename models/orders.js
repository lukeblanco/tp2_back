import pkg from "mongoose";
const { Schema, model } = pkg;
import { ProductSchema } from "./products.js";

const OrderSchema = new Schema({
  nameUser: String,
  emailUser: String,
  products: [ProductSchema],
  total: Number,
});

export default model("orders", OrderSchema);
