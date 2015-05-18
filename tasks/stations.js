var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config');

module.exports = function() {
  Mongoose.connect('mongodb://localhost');
  var collection = [];
	var stream = fs.createReadStream(config.files.stations[0]),
        csvStream = csv(config.options.stations)
      .on("data", function(data){
        collection.push(data);
        console.log("Parsing station #" + data.trip_id)
      })
      .on("end", function() {
        collection.map(function(data) {
          var station = new models.Station({
            stationId: data.id,
            name: data.name,
            lat: data.latitude,
            lng: data.longitude
          });
          station.save(function (err) {
            console.log("Saved " + station)
            if (err) console.log(err);
          })
        });
      });
    stream.pipe(csvStream);
    // Mongoose.connection.close();
}