// This file offers a set of api routes

// Dependencies
const path = require('path');
const Workout = require('../models/Workout');

module.exports = function(app) {
	// Each of the below routes will be used to do CRUD operations.

	// Get route to retrieve all workouts from database
	app.get('/api/workouts', (req, res) => {
		Workout.find({})
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.json(err);
			});
	});

	// Get route to retrieve workouts from database that are within a range

	// Post route to add workout to the database
	app.post('/api/workouts', ({ body }, res) => {
		const newWorkout = new Workout(body);
		newWorkout.workoutDay();

		Workout.create(newWorkout)
			// .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: [ { _id: params.workout_id } ] }, { new: true }))
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.json(err);
			});
	});

	// Put route to update workout to the database
	app.put('/api/workouts/:workout_id', (req, res) => {
		Workout.findOneAndUpdate({}, { $push: { _id: params.workout_id } }, { new: true })
			.then((data) => {
				res.json(data);
			})
			.catch((err) => {
				res.json(err);
			});
	});

	//
};
