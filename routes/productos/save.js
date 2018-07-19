const productoModel = require('models/producto');

module.exports = (req, res) => {

	try {

		if (!req.body.hasOwnProperty('nombre') ||
			!req.body.hasOwnProperty('codigo') ||
			!req.body.hasOwnProperty('descripcion') ||
			!req.body.hasOwnProperty('imagen'))
		{
			throw new Error("Invalid request");
		}

		var newProducto = new productoModel({
			nombre: req.body.nombre,
			codigo: req.body.codigo,
			descripcion: req.body.descripcion,
			imagen: req.body.imagen,
			user: req.userId
		});

		newProducto
		.save()
		.then(createdProducto => {
			res.send(createdProducto);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})


	} catch (err) {
		console.log(err);
		res.sendStatus(400);
	}

}