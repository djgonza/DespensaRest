require('rootpath')();
var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')
var routes = require('./routes');

//Mover a un lugar mejor
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/Despensa');

//Colores para la consola, mover
var colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

var app = express();

//Elimianr en PRO
app.use(cors());

app.use(express.json({limit: '10mb'}));
app.use(bodyParser.json());

app.use(routes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, function () {
  console.log('Servidor corriendo en el Puerto: ', port);
});