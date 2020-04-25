// Require mongoose
const mongoose = require('mongoose');

// Create schema variable
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: Date,

	exercises: [
		{
			type: String,

			name: String,

			distance: Number,

			duration: Number,

			weight: Number,

			sets: Number,

			reps: Number
		}
	]
});

WorkoutSchema.methods.workoutDay = function() {
	this.day = Date.now();
	return this.day;
};

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
