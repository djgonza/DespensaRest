const ubicacionesModel = require('models/ubicaciones.js');

module.exports = (req, res) => {

	ubicacionesModel.find({})
	.lean()
	.exec()
	.then(ubicaciones => {
		res.send(ubicaciones);
	})
	.catch(err => {
		res.send(err);
	});
}