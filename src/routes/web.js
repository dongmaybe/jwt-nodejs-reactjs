import express from 'express';
/**import homeController from '../controller/homeController';*/
import  handlceHelloWorld  from '../controller/homeController';

const router = express.Router();



const initWebRoutes = (app) => {
  router.get('/',handlceHelloWorld.handleHelloWorld)
  router.get('/user', handlceHelloWorld.handleUserPage)
  router.post('/users/create-use',handlceHelloWorld.handCreateNewUser)
  
  return app.use('/', router);
}

export default initWebRoutes;

/// model -view - controller 
/// router url tren web    => /user
// router  => controller handle
/// render view
