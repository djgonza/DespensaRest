/* 
	Leer el schema y devuelve las propiedades y los tipos RECURSIVAMENTE
*/

module.exports = function leerPropiedadesSchema (schema) {

	var data = {};

	for(var obj in schema.paths) {
		data[obj] = {
			path: schema.paths[obj].path,
			instance: schema.paths[obj].instance
		}
		if (schema.paths[obj].hasOwnProperty("schema")){
			data[obj].schema = leerPropiedadesSchema(schema.paths[obj].schema);
		}
	}
	
	return data;

}