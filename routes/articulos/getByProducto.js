const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel.find({producto: req.query.productoId})
	.then(articulos => {
		res.send(articulos);
	})
	.catch(err => {
		res.send(err);
	});
}