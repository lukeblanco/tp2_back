import express, { Router } from "express";
import { finalizarCompra } from "./casodeuso/finalizarCompra/finalizarCompra.js";
import Product from "../models/products.js";
import pkg from "mongoose";
import { notificarVentaconPDF } from '../src/casodeuso/NotificarVentaconPDF.js'

const { connect } = pkg;
const app = express();

app.use(express.json());

//conexion db
connect("mongodb://localhost:27017/milaPatisserie", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));

//export default model("product", ProductSchema);

const router = Router();

////endpoints
//router.post('/pedidos', async function (req, res){
//  try {
//    const resu = await finalizarCompra(req.body)
//    console.log(resu)
//  } catch (error) {
//    console.log(error)
//  }
//  return res.json;
//});

router.post("/compra", async (req, res) => {
  try {
    const resu = await finalizarCompra(req.body);
    res.json(resu);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//- - - -  - - - -  - - - - - - - - - - - - - - - - - - -

router.get("/", async (req, res) => {
  const products = await find();
  res.json(products);
});

router.post("/add", async (req, res) => {
  const product = new Product(req.body);
  console.log(product);
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

//- - - - - - - - - - - - - - - - - - - - - - - - - - -

app.use("/api", router);

app.listen(8080, () => {
  console.log("Conectado");
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


router.post("/notify", async (req, res) => {
  try {
    const notify = await notificarVentaconPDF(id);
    res.json(notify);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});