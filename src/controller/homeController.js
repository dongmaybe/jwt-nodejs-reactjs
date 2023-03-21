import mysql  from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt'   
}); 

const handleHelloWorld =(req,res) =>{
    const name =" DONG";
    return   res.render('home.ejs',{name});
}

const handleUserPage =( req,res)=> {
    // model   => get   data from database

    return res.render('user.ejs');
}

const   handCreateNewUser =(req,res)=>{
    let username = req.body.username;
    let password =req.body.password;
    let email= req.body.email;
    connection.query(
        '    INSERT INTO users (email, password,username ) VALUES (?,?,?)',[email, password,username],
        function(err, results, fields) {
            if(err){
                console.log(err)
            }
          console.log(results); // results contains rows returned by server
          
        }
      );
    console.log(">>> check  request : " ,req.body)
    return res.send(" dang thuc hien ");
}
module.exports ={
    handleHelloWorld,handleUserPage,handCreateNewUser
}