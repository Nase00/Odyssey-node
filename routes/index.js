var Path = require('path'),
		Hapi = require('hapi'),
		Good = require('good'),
		controllers = require('../controllers/index.js');

module.exports = [
	{
	  method: 'GET',
	  path: '/',
	  config: controllers.redirectToApp
	},
	{
	  method: 'GET',
	  path: '/trip_for/{tripId}/after/{offset}',
	  config: controllers.displayTrip
	}
];