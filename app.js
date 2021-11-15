import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import pkg from 'mongoose';
const { connect } = pkg;
const app = express();

//connecting to db
connect("mongodb://localhost/milaPatisserie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));

//importing routes
import routes from './routes/index.js';

//middlewares
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());

//routes
app.use("/", routes);

//starting the server
app.listen(3000, () => {
  console.log("listening");
});
