const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Producto = mongoose.model('Producto', 
{ 
	nombre: String,
	codigo: String,
	descripcion: {
		type: String,
		default: ''
	},
	imagen: String
});

module.exports = Producto;