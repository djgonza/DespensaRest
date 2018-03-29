const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ubicaciones = mongoose.model('Ubicaciones', 
{ 
	nombre: String
});

module.exports = Ubicaciones;