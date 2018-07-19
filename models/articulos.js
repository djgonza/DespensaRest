const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Articulos = mongoose.model('Articulos', 
{ 
	fechaCaducidad: Date,
	ubicacion: Schema.Types.ObjectId,
	producto: Schema.Types.ObjectId,
	cantidad: Number,
	user: Schema.Types.ObjectId
});

module.exports = Articulos;