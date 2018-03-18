const productoModel = require('models/producto.js');

module.exports = (req, res) => {

	console.log(req.body);

	productoModel
		.remove({_id: req.body.id})
		.then(validate => {
			res.send(validate);
		})
		.catch(err => {
			console.log("Error: ".red,  err.message.red);
			res.send(err.message);
		})
}