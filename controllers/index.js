var models = require('../models/index');

module.exports = {
	redirectToApp: {
		handler: function(req, reply) {
	    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
	  }
	},
	displayTrip: {
		handler: function(req, reply) {
			var query = models.Trip.find({bikeId: req.params.bikeId}).skip(req.params.offset).limit(1)
	  	reply(query)
	  }
	}
}