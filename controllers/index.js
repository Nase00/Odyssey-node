var models = require('../models/index'),
		getTrips = require('./get-trips');

module.exports = {
	redirectToApp: {
		handler: function(request, reply) {
	    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
	  }
	},
	displayTrip: {
		handler: function(request, reply) {
			// var trip = new models.Trip({
			// 	trip_id: 12345
			// })
			// trip.save(function (err) {
			//   if (err) return handleError(err);
			// })
			var find = models.Trip.find({
				trip_id: 12345
			})
			reply(find)
	    // reply(getTrips(request.params.tripId, request.params.offset));
	  }
	}
}