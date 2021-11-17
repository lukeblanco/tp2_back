import express from "express";
import pkg from "mongoose";
import routes from "./router.js"

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


app.use("/api", routes);

app.listen(3000, () => {
  console.log("Conectado");
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 