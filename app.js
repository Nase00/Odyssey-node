var Hapi = require('hapi'),
    Mongoose = require('mongoose');

var dbURI = process.env.PROD_MONGODB || 'mongodb://localhost';

var server = new Hapi.Server(),
    routes = require('./routes/index');

server.connection({
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
  routes: {
  	cors: {
  		origin: ['null'],
  		credentials: true,
  		override: false
  	}
	}
});

server.route(routes);

server.start(function() {
  Mongoose.connect(dbURI);
  console.log('Running at ' + server.info.uri)
});

module.exports = {
  dbURI: dbURI
}