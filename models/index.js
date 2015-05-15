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
		required: true,
		unique: true
	},
	bikeId: {
		type: Number,
		required: true
	},
	startTime: {
		type: String,
		required: true
	},
	stopTime: {
		type: String,
		required: true
	},
	tripDuration: {
		type: Number
	},
	originStationId: {
		type: Number
	},
	originStationName: {
		type: String
	},
	destinationStationId: {
		type: Number
	},
	destinationStationName: {
		type: String
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