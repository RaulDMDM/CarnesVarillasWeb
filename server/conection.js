const mysql = require('mysql2');

conexion = mysql.createConnection({
    host: 'localhost',
    database: 'varillas_web',
    user: 'admin',
    password: 'admin'
});
    
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexión exitosa");
    }
});

module.exports = conexion;




