const productoModel = require('models/producto.js');

module.exports = (req, res) => {

	productoModel
		.update({_id: req.body.id}, { $set: req.body})
		.then(validate => {
			res.send(validate);
		})
		.catch(err => {
			console.log("Error: ".red,  err.message.red);
			res.send(err.message);
		})
}