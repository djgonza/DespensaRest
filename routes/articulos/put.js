const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	console.log(req.body);

	articulosModel
		.update({_id: req.body.id}, { $set: req.body})
		.then(validate => {
			console.log("updated", validate);
			res.send(validate);
		})
		.catch(err => {
			console.log("Error: ".red,  err.message.red);
			res.send(err.message);
		})
}