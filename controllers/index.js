var models = require('../models/index'),
		query = require('./helpers/query');

module.exports = {
	redirectToApp: {
		handler: function(req, reply) {
	    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
	  }
	},
	findTrip: {
		handler: function(req, reply) {
	  	query.findTrip(req, reply);
	  }
	},
	findBike: {
		handler: function(req, reply) {
			query.findBike(req, reply);
		}
	}
}