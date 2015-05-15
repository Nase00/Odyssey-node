var Path = require('path'),
    Hapi = require('hapi'),
    Mongoose = require('mongoose'),
		models = require('./models/index'),
		csv = require('fast-csv'),
		fs = require('fs');

var config = require('./data/csv/config');

var tasks = [
              'stations',
              'trips',
              'yolo'
              ];
    task = process.argv.slice(2)[0];

switch (task) {
  case tasks[0]: 
    var stream = fs.createReadStream(config.files.stations[0]),
        csvStream = csv(config.stations)
      .on("data", function(data){
        var station = new models.Station({
         stationId: data.id,
         name: data.name,
         lat: data.latitude,
         lng: data.longitude
        })
        console.log(station)
        station.save(function (err) {
          if (err) console.log(err);
        })
      })
      .on("end", function(){
        console.log("Done seeding " + tasks[0]);
      });
    stream.pipe(csvStream);
    break;
  case tasks[1]:
    var stream = fs.createReadStream(config.files.trips[0]),
        csvStream = csv(config.trips)
      .on("data", function(data){
        var station = new models.Trip({
         tripId: data.id,
         startTime: data.starttime,
         stopTime: data.stoptime,
         bikeId: data.bikeid,
         originStationId: data.from_station_id
        })
        console.log(station)
        station.save(function (err) {
          if (err) console.log(err);
        })
      })
      .on("end", function(){
        console.log("Done seeding " + tasks[0]);
      });
    stream.pipe(csvStream);
    break;
  case tasks[tasks.length - 1]:
    tasks.forEach(function(e, i) {
      console.log(e)
      if (i != tasks.length) {
        Mongoose.connection.collections[e[i]].drop( function(err) {
          console.log('collection dropped');
        });
      }
    })
    break;
  default:
    console.log('Valid commands: ' + tasks)
    break;
}
    