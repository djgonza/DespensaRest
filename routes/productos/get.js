const productoModel = require('models/producto');
//const leerPropiedadesSchema = require('utilities/leerPropiedadesSchema');

module.exports = (req, res) => {

	productoModel.find({})
	.then(productos => {
		/*res.send({
			type: productoModel.modelName,
			schema: leerPropiedadesSchema(productoModel.schema),
			data: productos
		});*/
		res.send(productos);
	})
	.catch(err => {
		res.send(err);
	});
}