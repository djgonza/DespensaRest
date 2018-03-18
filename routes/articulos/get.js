const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	console.log(req.query);

	articulosModel.find({producto: req.query.id})
	.then(articulos => {
		res.send(articulos);
	})
	.catch(err => {
		res.send(err);
	});
}