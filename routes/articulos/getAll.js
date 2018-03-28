const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel.find({})
	.lean()
	.exec()
	.then(articulos => {
		return articulos;
		/*return bluebird.map(productos, (producto) => {
			return articulosModel
				.find({producto: producto._id})
				.sort({'fechaCaducidad': 1})
				.lean()
				.exec()
				.then(articulos => {
					producto.articulos = articulos;
					return producto;
				});
		});*/
	})
	.then(articulos => {
		res.send(articulos)
	})
	.catch(err => {
		res.send(err);
	});
}