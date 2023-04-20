require('./server/conection');

const express = require('express');
const port = (process.env.port || '3000');


//Creamos una instancia de express
const app = express();

//recibir tipos de datos para consulta
app.use(express.json());

//Configuracion del puerto
app.set('port', port);

//rutas
app.use('/api',require('./server/routes'));

//Inicio express
app.listen(app.get('port'),(error)=>{
    if(error){
        throw error
    }else{
        console.log('Servidor iniciado en el puerto: ' + port)
    }
})