//variable desde la que llamaremos al modulo mysql2 de Node
const mysql = require('mysql2');

//Datos de conexión con la base de datos
conexion = mysql.createConnection({
    host: 'localhost',
    database: 'varillas_web',
    user: 'admin',
    password: 'admin'
});

//conexion con la base de datos
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexión exitosa");
    }
});

//Exportacion del modulo conexion
module.exports = conexion;




