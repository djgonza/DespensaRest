const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel.find({producto: req.body.id})
	.then(articulos => {
		res.send(articulos);
	})
	.catch(err => {
		res.send(err);
	});
}