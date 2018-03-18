const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	console.log(req.body);

	var newArticulo = new articulosModel(req.body);

	newArticulo
		.save()
		.then(createdArticulo => {
			res.send(createdArticulo);
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		})

	
}