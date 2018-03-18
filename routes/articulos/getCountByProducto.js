const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel.count({producto: req.query.productoId})
	.then(count => {
		res.send({
			articulosCount: count,
			productoId: req.query.productoId
		});
	})
	.catch(err => {
		res.send(err);
	});
}