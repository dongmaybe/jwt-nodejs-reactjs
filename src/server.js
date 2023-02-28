import express from "express";
import configViewEngine  from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
 
require("dotenv").config();
const app = express();


configViewEngine (app);

const PORT =process.env.PORT||8080;
initWebRoutes(app);

app.listen(PORT,()=>{
  console.log("dang chay jwt"+PORT);
});