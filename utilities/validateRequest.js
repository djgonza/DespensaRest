const http = require('http');
const config = require('config.json');

module.exports = (req, res, next) => {

	try {

		if (!req.headers.authorization) {
			throw new Error("Not header found");
		}

		var body = {
			"domain": config.domain,
			"token": req.headers.authorization 
		}

		var options = {
			host: config.tokenService.host,
			path: config.tokenService.path,
			port: config.tokenService.port,
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			}
		};

		var request = http.request(options, (response) => {

			try {

				if (response.statusCode != 200) {
					throw "Validate Access Token failed";
				}

				var data;

				response.on('data', (chunk) => {
					data = chunk;
				});

				response.on('end', () => {
					req.userId = JSON.parse(data.toString()).userId
					next();
				});

			} catch(err) {
				console.log(err);
				res.sendStatus(401);
			}

		});
		request.write(JSON.stringify(body));
		request.end();

	} catch (err) {
		console.log(err);
		res.sendStatus(401);
	}
	
}