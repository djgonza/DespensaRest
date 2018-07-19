const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel.find({'user': req.userId})
	.lean()
	.exec()
	.then(articulos => {
		res.send(articulos)
	})
	.catch(err => {
		console.log(err);
		res.sendStatus(400);
	});
}