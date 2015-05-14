var Path = require('path'),
		Hapi = require('hapi'),
		Good = require('good');

// http://www.seanowiecki.com/Odyssey-client/

routes = {
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
  }
}

module.exports = routes