// This file offers a set of api routes

// Dependencies
const path = require('path');
const db = require('../models');

module.exports = function(app) {
	// Each of the below routes will be used to do CRUD operations.

	app.get('/api/workouts', (req, res) => {
		db.Workout
			.find({})
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.json(err);
			});
	});
};
