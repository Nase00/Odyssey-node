var models = require('../../models/index'),
		moment = require('moment');

var findTrip = function(req, reply) {
	// Lookup bike's trips
	models.Trip.findOne({bikeId: req.params.bikeId})
				.sort('-startTime')
				.skip(req.params.offset)
				.limit(1)
				.exec(function(err, trip) {
					// Bike must have zero trips
					if (!trip && req.params.offset == 0) {
						reply({
							status: 404,
							message: "No trips found"
						}) 
					// Bike may have trips, but not at offset parameter
					} else if (!trip) {
						reply({
							status: 510,
							message: "End of the line"
						})
					// Return trip with station coordinates
					} else {
						models.Station.findOne({stationId: trip.originStationId})
													.limit(1)
													.exec(function(err, station) {
														reply({
															"status": 200,
															"lat": station.lat,
															"lng": station.lng,
															"trip_id": trip.tripId,
															"start_time": moment(trip.startTime).format('MMMM Do YYYY, h:mm a'),
															"stop_time": moment(trip.stopTime).format('MMMM Do YYYY, h:mm a'),
															"duration": trip.duration,
															"start_location": trip.originStationName,
															"stop_location": trip.destinationStationName
														})
													});
					}
				})
};

module.exports = findTrip;