var express = require('express');
var fs = require('fs');

var app = express();

app.use( express.static(__dirname + '/public') );

app.get('/', function(peticion, respuesta){
    respuesta.sendFile('index.html');
});

app.listen(3000, function(){
    console.log("escuchando por el puerto 3000");
    console.log("http://localhost:3000");
});