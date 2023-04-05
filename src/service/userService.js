import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = async(email, password, username) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',   
    database: 'jwt',
    Promise: bluebird
  });
  let hashPass = hashUserPassword(password);
 
  const [rows, fields] = await connection.execute('INSERT INTO user (email, password, username) VALUES (?, ?, ?)',
  [email, hashPass, username]);
  
 
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird
  });
  try {
    const [rows, fields] = await connection.execute('Select * from user ');
    return rows;
  } catch (error) {
    console.log('check error', error);
  }
};
const deleteUser=async (id)=>{
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'jwt',
      Promise: bluebird
    });

    const [rows, fields] = await connection.execute('DELETE FROM user WHERE id=?;',[id]);
    return rows;
  } catch (error) {
    console.log('check error', error);
  }
 

}
const getUserbyID =async(id) =>{
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'jwt',
      Promise: bluebird
    });

    const [rows, fields] = await connection.execute('Select * FROM user WHERE id=?;',[id]);
    return rows;
  } catch (error) {
    console.log('check error', error);
  }
}
const updataUserInfor=async(email,username,password,id)=>{
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'jwt',
      Promise: bluebird 
    });

    const [rows, fields] = await connection.execute('UPDATE user SET email=? , username=? , password=? WHERE id=?;',[email,username,password,id]);
    return rows;
  } catch (error) {
    console.log('check error', error);
  }

}

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserbyID ,
  updataUserInfor
};
