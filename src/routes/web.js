import express from 'express';
/**import homeController from '../controller/homeController';*/
const router = express.Router();

const initWebRoutes = (app) => {
  router.get('/', (req,res)=>{
    return res.send("hello word");
  })
  router.get('/about', (req,res)=>{
    return res.send("hello word cai l");
  })
  
  return app.use('/', router);
}

export default initWebRoutes;
