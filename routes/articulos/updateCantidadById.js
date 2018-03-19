const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel
		.update({_id: req.body.id}, { cantidad: req.body.cantidad})
		.then(validate => {
			res.send(req.body);
		})
		.catch(err => {
			console.log("Error: ".red,  err.message.red);
			res.send(err.message);
		})
}