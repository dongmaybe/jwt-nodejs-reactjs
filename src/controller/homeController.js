const handleHelloWorld =(req,res) =>{
    const name =" DONG";
    return   res.render('home.ejs',{name});
}

const handleUserPage =( req,res)=> {
    return res.render('user.ejs');
}

module.exports ={
    handleHelloWorld,handleUserPage
}