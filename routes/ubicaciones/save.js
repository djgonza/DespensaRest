const ubicacionesModel = require('models/ubicaciones.js');

module.exports = (req, res) => {

	var newUbicacion = new ubicacionesModel(req.body);

	newUbicacion
		.save()
		.then(createdUbicacion => {
			res.send(createdUbicacion);
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		})

	
}