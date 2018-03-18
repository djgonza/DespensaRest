const productoModel = require('models/producto');

module.exports = (req, res) => {

	console.log(req.body);

	var newProducto = new productoModel(req.body);

	newProducto
		.save()
		.then(createdProducto => {
			res.send(createdProducto);
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		})

	
}