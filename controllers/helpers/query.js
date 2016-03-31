const models = require('../../models/index');
const moment = require('moment');

const findTrip = (req, reply) => {
  // Lookup bike's trips
  models.Trip.findOne({ bikeId: req.params.bikeId })
    // .sort({ startTime: 1 })
    .skip(req.params.offset)
    .limit(1)
    .exec((err, trip) => {
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
        models
          .Station
          .findOne({ id: trip.originStationId })
          .limit(1)
          .exec((err, station) => {
            reply({
              "status": 200,
              "bike_id": trip.bikeId,
              "lat": station.lat,
              "lng": station.lng,
              "trip_id": trip.id,
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

var findBike = function(req, reply) {
  models.Trip.findOne({id: req.params.tripId})
    .exec(function(err, trip) {
      if (!trip) {
        reply('Not found.')
      } else {
        reply(trip.bikeId)
      }
    })
};

module.exports = {
  findTrip: findTrip,
  findBike: findBike
};
