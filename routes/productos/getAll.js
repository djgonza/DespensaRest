const bluebird = require("bluebird");
const productoModel = require('models/producto');
const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	productoModel.find({})
	.lean()
	.exec()
	.then(productos => {
		return bluebird.map(productos, (producto) => {
			return articulosModel
				.find({producto: producto._id})
				.sort({'fechaCaducidad': 1})
				.lean()
				.exec()
				.then(articulos => {
					producto.articulos = articulos;
					return producto;
				});
		});
	})
	.then(productos => {
		res.send(productos)
	})
	.catch(err => {
		res.send(err);
	});
}