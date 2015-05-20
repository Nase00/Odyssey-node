var assert = require('assert'),
		Mongoose = require('mongoose');

var dbURI = require('../app').dbURI,
		Station = require('../models/index').Station,
		Trip = require('../models/index').Trip;

// Mongoose.connect(dbURI);

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
	}),
	testStation = new Station({
		id: 303,
    name: 'Broadway & Cornelia Ave',
    lat: 41.945512,
    lng: -87.64598
	});

describe('Trip', function() {
	it('has an id', function() {
		assert.equal(2160196, testTrip.id);
	});
	it('has a bikeId', function() {
		assert.equal(100, testTrip.bikeId);
	});
	it('has an origin station id', function() {
		assert.equal(303, testTrip.originStationId);
	});
	it('has an origin station name', function() {
		assert.equal('Broadway & Cornelia Ave', testTrip.originStationName);
	});
	it('has a destination station id', function() {
		assert.equal(22, testTrip.destinationStationId);
	});
	it('has a destination station name', function() {
		assert.equal('May St & Taylor St', testTrip.destinationStationName);
	});
	it('has a trip duration', function() {
		assert.equal(1992, testTrip.tripDuration);
	});
});

describe('Station', function() {
	it('has an id', function() {
		assert.equal(303, testStation.id);
	});
	it('has a name', function() {
		assert.equal('Broadway & Cornelia Ave', testStation.name);
	});
	it('has a latitude', function() {
		assert.equal(41.945512, testStation.lat);
	});
	it('has a longitude', function() {
		assert.equal(-87.64598, testStation.lng);
	});
})