const productoModel = require('models/producto');

module.exports = (req, res) => {

	console.log("peticion");

	productoModel.find({})
	.then(productos => {
		res.send(productos);
	})
	.catch(err => {
		res.send(err);
	});
}