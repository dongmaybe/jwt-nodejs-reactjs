import userService from '../service/userService';

const handleHelloWorld =(req,res) =>{
    return   res.render('home.ejs',);
}

const handleUserPage =async( req,res)=> {   
    let UserList = await userService.getUserList();
    //await userService.deleteUser(5);
    return res.render('user.ejs',{UserList});
}

const   handCreateNewUser =(req,res)=>{
    let username = req.body.username;
    let password =req.body.password;
    let email= req.body.email;
       userService.createNewUser(email,password,username);
    return  res.redirect('/user');  

    
}
const   handDeleteUser=async(req, res)=> { 
    //console.log(" check check id: ",req.params.id);
    await userService.deleteUser(req.params.id);
    return res.redirect('/user');
}
const   getUpdateUser=async(req, res)=> { 
    //console.log(" check check id: ",req.params.id);
   // await userService.deleteUser(req.params.id);
   let id=req.params.id;
   let user=await userService.getUserbyID(id);

   let userdata ={};
   if (user &&user.length>0)
   {
    userdata=user[0];
   }
    return res.render('user-update.ejs',{userdata});
}
const hendUpdateUser = async(req,res)=>{
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let id=req.body.id;
    //console.log("check " ,req.body);
    await userService.updataUserInfor(email,username,password,id);
    return res.redirect('/user');


}
module.exports ={
    handleHelloWorld,handleUserPage,handCreateNewUser,handDeleteUser,getUpdateUser,hendUpdateUser
}