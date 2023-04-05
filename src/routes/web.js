import express from 'express';
/**import homeController from '../controller/homeController';*/
import  homeController  from '../controller/homeController';
//import homeController from '../controller/homeController';
const router = express.Router();



const initWebRoutes = (app) => {
  router.get('/',homeController.handleHelloWorld)
  router.get('/user', homeController.handleUserPage)
  router.post('/users/create-use',homeController.handCreateNewUser)
  router.post('/delete-user/:id',homeController.handDeleteUser)
  router.get('/update-user/:id',homeController.getUpdateUser)
  router.post('/users/update-user',homeController.hendUpdateUser)
  return app.use('/', router);
}

export default initWebRoutes;

/// model -view - controller 
/// router url tren web    => /user
// router  => controller handle
/// render view
