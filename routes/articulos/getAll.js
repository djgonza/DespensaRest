const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel.find({})
	.then(articulos => {
		res.send(articulos);
	})
	.catch(err => {
		res.send(err);
	});
}