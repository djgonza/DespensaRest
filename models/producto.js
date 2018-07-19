const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Producto = mongoose.model('Producto', 
{ 
	nombre: String,
	codigo: String,
	descripcion: String,
	imagen: Schema.Types.ObjectId,
	user: Schema.Types.ObjectId
});

module.exports = Producto;