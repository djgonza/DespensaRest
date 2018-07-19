const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ubicaciones = mongoose.model('Ubicaciones', 
{ 
	nombre: String,
	user: Schema.Types.ObjectId
});

module.exports = Ubicaciones;