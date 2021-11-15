import pkg from 'mongoose';
const { Schema, model } = pkg;

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
});

export default model("product", ProductSchema);
