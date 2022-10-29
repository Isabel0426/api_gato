//configurar servidor: importar las dependencias: 
const express = require ('express');
const gato = express();

//inicializar el servidor
gato.listen(2563, function(){
    console.log ('servidor en funcionamiento.');
});
//prueba en la web usando el metodo get
//siempre parametro de requerir y de respuesta
gato.get('/',function(req, res){
        res.send('<h1>servidor funcionando en el puerto 2563</h1>')
}) 