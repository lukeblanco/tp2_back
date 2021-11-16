import express, { Router } from "express";
import pkg from "mongoose";
import routs from "./router.js"

const { connect } = pkg;
//conexion db
connect("mongodb://localhost:27017/milaPatisserie", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));
  
const app = express();

app.use(express.json());


app.use("/api", routs);

app.listen(8080, () => {
  console.log("Conectado");
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 