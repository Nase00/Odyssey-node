var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var stationSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	stationId: {
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
	tripId: {
		type: Number,
		unique: true
	},
	bikeId: {
		type: Number,
		required: true
	},
	startTime: {
		type: Date,
		required: true
	},
	stopTime: {
		type: Date,
		required: true
	},
	tripDuration: {
		type: Number,
		required: true
	},
	originStationId: {
		type: Number
	},
	originStationName: {
		type: String,
		required: true
	},
	destinationStationId: {
		type: Number,
		required: true
	},
	destinationStationName: {
		type: String,
		required: true
	},
	userType: {
		type: String
	},
	gender: {
		type: String
	},
	birthday: {
		type: String
	}
})

var Trip = mongoose.model('Trip', tripSchema);

module.exports = {
	Station: Station,
	Trip: Trip
}