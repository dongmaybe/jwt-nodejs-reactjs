import express from "express";
import configViewEngine  from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
 
require("dotenv").config();
import bodyParser from  'body-parser';
const app = express();

// config view engine
configViewEngine (app);

// config  body-parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web router
const PORT =process.env.PORT||8080;
initWebRoutes(app);

app.listen(PORT,()=>{
  console.log("dang chay jwt"+PORT);
});