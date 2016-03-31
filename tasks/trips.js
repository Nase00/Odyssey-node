const Mongoose = require('mongoose');
const models = require('../models/index');
const csv = require('fast-csv');
const fs = require('fs');

const config = require('../data/csv/config');
const file = process.argv.slice(3)[0];
const dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost';

module.exports = () => {
  Mongoose.connect(dbURI);
  const collection = [];
  const stream = fs.createReadStream(config.files.trips[file]);
  const csvStream = csv(config.options.trips)
    .on("data", (data) => {
      const trip = new models.Trip({
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
      trip.save((err) => {
        console.log(`${Saved} trip`);
        if (err) {
          console.log(err);
        }
      })
    })
    .on("end", () => {
      console.log('Done! Ctrl+C to quit.');
    });
    stream.pipe(csvStream);
    // Mongoose.connection.close();
}
