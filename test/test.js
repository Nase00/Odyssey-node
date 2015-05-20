var assert = require('assert'),
		Mongoose = require('mongoose');

var dbURI = require('../app').dbURI,
		Station = require('../models/index').Station,
		Trip = require('../models/index').Trip;

// Mongoose.connect(dbURI);

describe('Trip', function() {
	it('has an id', function() {
		var testTrip = new Trip({
			id: 2160196,
      bikeId: 100,
      startTime: Date.parse('6/30/2014 23:57,7/1/2014 0:07'),
      stopTime: Date.parse('6/30/2014 23:56,7/1/2014 0:00'),
      originStationId: 303,
      originStationName: 'Broadway & Cornelia Ave',
      destinationStationId: 22,
      destinationStationName: 'May St & Taylor St',
      tripDuration: 1992
		})
		console.log(testTrip)
		assert.equal(2160196, testTrip.id);
		assert.equal(100, testTrip.bikeId);
		assert.equal(1, testTrip.startTime);
		assert.equal(1, testTrip.stopTime);
	})
})