var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config'),
    file = process.argv.slice(3)[0];;

module.exports = function() {
  Mongoose.connect('mongodb://localhost');
  var collection = [];
	var stream = fs.createReadStream(config.files.trips[file]),
        csvStream = csv(config.options.trips)
      .on("data", function(data){
        collection.push(data);
        console.log("Parsing trip #" + data.trip_id)
      })
      .on("end", function() {
        collection.map(function(data) {
          var trip = new models.Trip({
            tripId: data.trip_id,
            bikeId: data.bikeid,
            startTime: data.starttime,
            stopTime: data.stoptime,
            originStationId: data.from_station_id,
            originStationName: data.from_station_name,
            destinationStationId: data.to_station_id,
            destinationStationName: data.to_station_name,
          })
          trip.save(function (err) {
            console.log("Saved " + trip)
            if (err) console.log(err);
          })
        });
      });
    stream.pipe(csvStream);
    // Mongoose.connection.close();
}