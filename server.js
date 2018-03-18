require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes');
const config = require('./config');

//Mover a un lugar mejor
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
mongoose.connect(config.databaseString);

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

app.use('/public', express.static(__dirname + config.staticContent));

app.use(cors());

app.use(express.json({limit: config.maxJsonFileAccept}));
app.use(bodyParser.json());

app.use(routes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Servidor corriendo en el Puerto: ', port);
});