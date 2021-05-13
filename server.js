const express = require("express");
const path = require("path");
const app = express();
const PUERTO = 3456;

// Middleware para poner el contenido de un form post en req.body
app.use(express.urlencoded({ extended: true}));

// Middleware para archivos de imagen, css, scripts, etc ("recursos estáticos")
app.use(express.static(__dirname));

// GET inicial, retorna la página index.html
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

// POST de form
app.post("/saludar", function(req, res){
    console.log(req.query);
    /*if (!req.query.nombre || !req.query.apodo || !req.query.apellido) {
        res.send("Faltan datos");
    } else {*/
        res.send(`Hola ${req.body.nombre}, "${req.body.apodo}" ${req.body.apellido}`);
   /*}*/
});

//Server
app.listen(PUERTO, function(){
    console.log(`Escuchando en puerto ${PUERTO}...`);
});
