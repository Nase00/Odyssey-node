var models = require('../models/index'),
		async = require('async'),
		trip,
		station;

var findTrip = function(req) {
	models.Trip.findOne({bikeId: req.params.bikeId})
				.sort('-startTime')
				.skip(req.params.offset)
				.limit(1)
				.exec(function(err, trip) {
					models.Station.findOne({stationId: trip.originStationId})
								.limit(1)
								.exec(function(err, station) {
									console.log(station)
								});
				})
			};

// var findStation = function(req) {
// 	models.Station.findOne({stationId: trip.originStationId})
// 				.exec(function(err, data) {
// 					console.log("station " + data)
// 					return data
// 				});
// 			};

var reply = function() {
	return {
		"status": 200,
		"lat": station.lat,
		"lng": station.lng
	}
	reply(hash)
}

module.exports = {
	redirectToApp: {
		handler: function(req, reply) {
	    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
	  }
	},
	displayTrip: {
		handler: function(req, reply) {
	  	findTrip(req);
	  }
	}
}