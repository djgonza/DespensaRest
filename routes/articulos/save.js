const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	var newArticulo = req.body;
	newArticulo.user = req.userId;

	new articulosModel(newArticulo)
	.save()
	.then(createdArticulo => {
		res.send(createdArticulo);
	})
	.catch(err => {
		console.log(err);
		res.sendStatus(500);
	})

	
}