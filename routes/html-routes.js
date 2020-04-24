// This file offers a set of html routes

// Dependencies
var path = require('path');

module.exports = function(app) {
	// Each of the below routes handles html pages.

	app.get('/', (req, res) => {
		// index route loads index.html
		app.get('/', function(req, res) {
			res.sendFile(path.join(__dirname, '../public/index.html'));
		});
	});
};
