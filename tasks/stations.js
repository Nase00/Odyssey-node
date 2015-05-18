var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config'),
    tasks = require('./index').list;

module.exports = function() {
  Mongoose.connect('localhost', 'stationSeeding');
  var collection = [];
	var stream = fs.createReadStream(config.files.stations[0]),
        csvStream = csv(config.options.stations)
      .on("data", function(data){
        collection.push(data);
      })
      .on("end", function() {
        collection.map(function(data) {
          models.Station.create({
            stationId: data.id,
            name: data.name,
            lat: data.latitude,
            lng: data.longitude
          }, function (err, small) {
            if (err) console.log(err);
          });
        });
        console.log("Done seeding " + tasks[0]);
      });
    stream.pipe(csvStream);
    Mongoose.connection.close();
}