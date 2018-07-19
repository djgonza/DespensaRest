const ubicacionesModel = require('models/ubicaciones.js');

module.exports = (req, res) => {

	var newUbicacion = req.body;
	newUbicacion.user = req.userId;

	new ubicacionesModel(newUbicacion)
	.save()
	.then(createdUbicacion => {
		res.send(createdUbicacion);
	})
	.catch(err => {
		console.log(err);
		res.sendStatus(500);
	})
	
}