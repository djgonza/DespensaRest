const articulosModel = require('models/articulos.js');

module.exports = (req, res) => {

	console.log(req.body);

	articulosModel
		.remove({_id: req.body.id})
		.then(validate => {
			console.log("delete", validate);
			res.send(validate);
		})
		.catch(err => {
			console.log("Error: ".red,  err.message.red);
			res.send(err.message);
		})
}