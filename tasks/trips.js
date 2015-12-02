var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config'),
    file = process.argv.slice(3)[0];
var dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost';

module.exports = function() {
  Mongoose.connect(dbURI);
  var collection = [];
	var stream = fs.createReadStream(config.files.trips[file]),
        csvStream = csv(config.options.trips)
      .on("data", function(data) {
        var trip = new models.Trip({
          id: data.trip_id,
          bikeId: data.bikeid,
          startTime: Date.parse(data.starttime),
          stopTime: Date.parse(data.stoptime),
          originStationId: data.from_station_id,
          originStationName: data.from_station_name,
          destinationStationId: data.to_station_id,
          destinationStationName: data.to_station_name,
          tripDuration: data.tripduration
        })
        trip.save(function (err) {
          console.log("Saved " + trip)
          if (err) console.log(err);
        })
      })
      .on("end", function() {
        console.log('Done! Ctrl+C to quit.')
      });
    stream.pipe(csvStream);
    // Mongoose.connection.close();
}
