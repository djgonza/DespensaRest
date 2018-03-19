const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Articulos = mongoose.model('Articulos', 
{ 
	fechaCaducidad: Date,
	ubicacion: "String",
	producto: Schema.Types.ObjectId,
	cantidad: Number
});

module.exports = Articulos;