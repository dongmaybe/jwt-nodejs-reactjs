import express from 'express';
/**import homeController from '../controller/homeController';*/
import  handlceHelloWorld  from '../controller/homeController';

const router = express.Router();



const initWebRoutes = (app) => {
  router.get('/',handlceHelloWorld.handleHelloWorld)
  router.get('/about', handlceHelloWorld.handleUserPage)
  
  return app.use('/', router);
}

export default initWebRoutes;
