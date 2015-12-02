var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config');
var dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost';

module.exports = function() {
  Mongoose.connect(dbURI);
  var collection = [];
  for (var i = 0; i < config.files.stations.length; i++) {
  	var stream = fs.createReadStream(config.files.stations[i]),
          csvStream = csv(config.options.stations)
        .on("data", function(data) {
          var station = new models.Station({
            id: data.id,
            name: data.name,
            lat: data.latitude,
            lng: data.longitude
          });
          station.save(function (err) {
            console.log("Saved " + station)
            if (err) console.log(err);
          })
        })
        .on("end", function() {
          console.log('Done! Ctrl+C to quit.')
        });
      stream.pipe(csvStream);
  }
  // Mongoose.connection.close();
}
