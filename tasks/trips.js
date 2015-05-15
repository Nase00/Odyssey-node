var Mongoose = require('mongoose'),
		models = require('../models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('../data/csv/config');

var tasks = require('./index').list;

task = process.argv.slice(2)[0];

module.exports = function() {
	var stream = fs.createReadStream(config.files.trips[0]),
        csvStream = csv(config.options.trips)
      .on("data", function(data){
        var trip = new models.Trip({
         tripId: data.id,
         startTime: data.starttime,
         stopTime: data.stoptime,
         bikeId: data.bikeid,
         originStationId: data.from_station_id,
         originStationName: data.from_station_name,
         destinationStationId: data.to_station_id,
         destinationStationName: data.to_station_name,
         userType: data.usertype,
         gender: data.gender,
         birthday: data.birthday
        });
        trip.save(function (err) {
          console.log("Saved " + trip)
          if (err) console.log(err);
        });
      })
      .on("end", function(){
        console.log("Done seeding " + tasks[1]);
      });
    stream.pipe(csvStream);
}