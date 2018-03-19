const productoModel = require('models/producto');
const fs = require('fs');
const randomstring = require('randomstring');
const config = require('config.json');

module.exports = (req, res) => {

	//Creamos una clave para la imagen
	var ruta = null;
	while (!ruta) {
		ruta = config.imagesPath + randomstring.generate() + ".jpg";
		if (!fs.existsSync(ruta)) {
			break;
		}
	}

	//Guardamos la imagen en el servidor
	try {
		saved = fs.writeFileSync(ruta, req.body.imagen, 'base64');
		//Reemplazamos la imagen por la ruta
		req.body.imagen = ruta;
	} catch (err) {
		console.log("try catch", err);
		res.sendStatus(500);
		res.send("Error al procesar la imagen");
	}

	var newProducto = new productoModel({
		nombre: req.body.nombre,
		codigo: req.body.codigo,
		descripcion: req.body.descripcion,
		imagen: ruta
	});

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