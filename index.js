const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//Crea la conexión a la DB
const db = require('./config/db');

//importar el modelo
require('./models/Proyectos');

db.sync()
    .then(()=> console.log('Conectado al servidor'))
    .catch(error => console.log(error));

//crea una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar pug
app.set('view engine','pug');

//Añadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//hablitar bodyParser para leer los datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

//Ruter
app.use('/', routes());

//Puerto
app.listen(1000);
