const bluebird = require("bluebird");
const productoModel = require('models/producto');
const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	productoModel.find({'user': req.userId})
	.lean()
	.exec()
	.then(productos => {
		return productos;
	})
	.then(productos => {
		res.send(productos)
	})
	.catch(err => {
		res.send(err);
	});
}