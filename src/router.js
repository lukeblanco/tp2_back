import { Router } from "express";
import { finalizarCompra } from "./casodeuso/finalizarCompra.js";
import Product from "./models/products.js";
import Order from "./models/orders.js";
import { notificarVentaconPDF } from "../src/casodeuso/NotificarVentaconPDF.js";
import { logIn, validateToken, logOut } from "../src/casodeuso/Usuario.js";
import nodemailer from 'nodemailer';
import { compraenEth } from '../src/casodeuso/compraenEth.js'

const routes = Router();

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

routes.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      console.log("No hay productos en la lista");
      res.status(204).send("No hay productos en la lista");
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(400).send('error');
  }
});

routes.post("/logIn", async (req, res) => {
  try {
    const user = await logIn(req.body);
    res.status(200).json({ user: user });
  } catch (error) {
    res.json({ error, message: "usuario o contraseña invalidos" })
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
  
routes.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    console.log(req.body);
    await product.save();
  } catch (error) {
    res.status(400).send("error");
  }
  res.status(200).send("added");
});

routes.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndRemove({ _id: id });
  } catch (error) {
    res.status(404).send("No se encontró el producto");
  }
  res.status(200).send("deleted");
});

routes.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndUpdate({ _id: id }, req.body);
  } catch (error) {
    res.status(404).send("No se encontró el producto");
  }
  console.log(req.body);
  res.status(200).send("updated");
});

routes.post("/addOrder", validateToken, async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    
  } catch (error) {
    res.status(400).send("error")
  }
  res.status(200).send("added");
});

routes.get("/deleteOrder/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndRemove({ _id: id });
  } catch (error) {
    res.status(404).send("No se encontró la orden");;
  }
  res.status(200).send("deleted");
});

routes.post("/notify/:id", validateToken, async (req, res) => {
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

routes.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "sunny.cole92@ethereal.email",
      pass: "5cftQprwtcxpnuerz9",
    },
  });
  try {
    await transporter.sendMail({
      from: "susana.veum64@ethereal.email",
      to: email,
      subject: "Enviado",
      text: message,
      html: `
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
       <p>${message}</p>
      `,
    });
  } catch (error) {
    res.status(500).send("Error inesperado, no se pudo enviar");
  }

  res.status(200).send("recived");
});

routes.post("/pedidoeth", async (req, res) => {
  const message = "pedido ok"
  try {
    const resu = await compraenEth(req.body)
    res.status(200).json({ message });
  } catch (error) {
    console.log(error)
    res.status(400).json('error')
  }
});

routes.post("/pedidos/:id", async( req,res ) => {
  const { id } = req.params;
  const message = "compra cambio ok"
  try {
    const resu = await finalizarCompra(id)
    res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    res.status(400).json('error')
  }
});

routes.post("/notificarventa", async (req, res) => {
  try {
    const notify = await notificarVentaconPDF(req.body);
    res.status(200).send('Notificación de venta exitosa - OK');
    res.json(notify);
  } catch (error) {
    res.status(400).send('Error 400 - bad request')
    console.log(error);
    res.json(error);
  }
});

export default routes;