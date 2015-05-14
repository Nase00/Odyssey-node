module.exports = {
	redirectToApp: {
		handler: function(request, reply) {
	    reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
	  }
	},
	displayTest: {
		handler: function(request, reply) {
	    reply('Hello, world');
	  }
	}
}