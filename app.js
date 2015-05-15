var Path = require('path'),
    Hapi = require('hapi'),
    Good = require('good'),
    Mongoose = require('mongoose');
    // db = require('./config/db');

// MongoDB Connection
Mongoose.connect('mongodb://localhost');

var routes = require('./routes/index');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
})

server.route(routes);

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, function (err) {
  if (err) {
    throw err; // something bad happened loading the plugin
  }
});

server.start(function() {
  console.log('Running at ' + server.info.uri)
});

// Mongoose.connection.db.dropDatabase();