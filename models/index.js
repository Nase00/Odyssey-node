const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
});

const Station = mongoose.model('Station', stationSchema);

const tripSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  bikeId: {
    type: Number,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  stopTime: {
    type: Date,
    required: true
  },
  tripDuration: {
    type: Number,
    required: true
  },
  originStationId: {
    type: Number
  },
  originStationName: {
    type: String,
    required: true
  },
  destinationStationId: {
    type: Number,
    required: true
  },
  destinationStationName: {
    type: String,
    required: true
  },
  userType: {
    type: String
  },
  gender: {
    type: String
  },
  birthday: {
    type: String
  }
});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = {
  Station: Station,
  Trip: Trip
};
