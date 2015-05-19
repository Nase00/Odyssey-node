var models = require('../models/index'),
		tripResponse = require('./helpers/trip-format');

module.exports = {
	redirectToApp: {
		handler: function(req, reply) {
	    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
	  }
	},
	displayTrip: {
		handler: function(req, reply) {
	  	tripResponse(req, reply);
	  }
	}
}