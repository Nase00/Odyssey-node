var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config');

var tasks = require('./index').list;

task = process.argv.slice(2)[0];

module.exports = function() {
	var stream = fs.createReadStream(config.files.stations[0]),
        csvStream = csv(config.options.stations)
      .on("data", function(data){
        var station = new models.Station({
         stationId: data.id,
         name: data.name,
         lat: data.latitude,
         lng: data.longitude
        });
        station.save(function (err) {
          console.log("Saved " + station)
          if (err) console.log(err);
        });
      })
      .on("end", function(){
        console.log("Done seeding " + tasks[0]);
      });
    stream.pipe(csvStream);
}