import { Router } from "express";
import { finalizarCompra } from "./casodeuso/finalizarCompra/finalizarCompra.js";
import Product from "../models/products.js";
import Order from "../models/orders.js";
import { notificarVentaconPDF } from '../src/casodeuso/NotificarVentaconPDF.js'
import { logIn, validateToken, logOut } from '../src/casodeuso/Usuario.js'

const routes = Router()

routes.post("/compra", validateToken, async (req, res) => {
  try {
    const resu = await finalizarCompra(req.body);
    res.json(resu);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//- - - -  - - - -  - - - - - - - - - - - - - - - - - - -

routes.get("/",validateToken, async (req, res) => {
  const products = await find();
  res.json(products);
});

routes.post("/logIn", async (req, res) => {
  try{ 
    const user = await logIn(req.body);
    res.status(200).json({ user: user });
  }
  catch(error){
    res.status(401).json({ error,message:"usuario o contraseña invalidos" })
  }  
  });

  routes.post("/logOut", async (req, res) => {
    try{ 
      const message = await logOut(req.body);
      res.status(200).json({ message });
    }
    catch(error){
      res.status(401).json({ error,message:"no se pudo desloguiar correctamente" })
    }  
    });

routes.post("/add",validateToken, async (req, res) => {
  const product = new Product(req.body);
  console.log(product);
  await product.save();
  res.json("received");
});

routes.get("/delete/:id",validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndRemove({ _id: id });
  } catch (error) {
    res.json("error");
    throw new Error(error);
  }
  res.json("deleted");
});

routes.post("/edit/:id",validateToken, async (req, res) => {
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


routes.post("/addOrder",validateToken, async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json("received");
});

routes.get("/deleteOrder/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndRemove({ _id: id });
  } catch (error) {
    res.json("error");
    throw new Error(error);
  }
  res.json("deleted");
});

routes.post("/notify/:id",validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await Order.findById({ _id: id });
    const notify = await notificarVentaconPDF(venta);
    res.json(notify);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

export default routes;