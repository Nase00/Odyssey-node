var Path = require('path'),
    Hapi = require('hapi'),
    Good = require('good');

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

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

server.start();