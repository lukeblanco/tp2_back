import { Router } from "express";
const router = Router();
import Product from "../models/products.js";

router.get("/", async (req, res) => {
  const products = await find();
  res.json(products);
});

router.post("/add", async (req, res) => {
  const product = new Product(req.body);
  console.log(req.body);
  await product.save();
  res.json("received");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndRemove({ _id: id });
  } catch (error) {
    res.json("error");
    throw new Error(error);
  }
  res.json("deleted");
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndUpdate({ _id: id }, req.body);
  } catch (error) {
    res.json("error");
    throw new Error(error);
  }
  console.log(req.body);
  res.json("updated");
});

export default router;
