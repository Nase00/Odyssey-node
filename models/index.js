var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var stationSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	station_id: {
		type: Number,
		required: true,
		unique: true
	},
	lat: {
		type: Number,
		required: true
	},
	lng: {
		type: Number,
		required: true
	}
})

var Station = mongoose.model('Station', stationSchema);

var tripSchema = new Schema({
	lat: {
		type: Number,
		required: true,
		unique: true
	},
	lng: {
		type: Number,
		required: true,
		unique: true
	},
	trip_id: {
		type: Number,
		required: true,
		unique: true
	},
})

var Trip = mongoose.model('Trip', tripSchema);

module.exports = {
	Station: Station,
	Trip: Trip
}