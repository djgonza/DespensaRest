const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	articulosModel
		.update({_id: req.body.id}, { $set: req.body})
		.then(validate => {
			res.send(validate);
		})
		.catch(err => {
			console.log("Error: ".red,  err.message.red);
			res.send(err.message);
		})
}