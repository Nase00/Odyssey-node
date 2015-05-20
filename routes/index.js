var Path = require('path'),
		Hapi = require('hapi'),
		controllers = require('../controllers/index.js');

module.exports = [
	{
		path: '/favicon.ico',
	  method: 'GET',
	  handler: { file: './favicon.ico' }
	},
	{
	  method: 'GET',
	  path: '/',
	  config: controllers.redirectToApp
	},
	{
	  method: 'GET',
	  path: '/trip_for/{bikeId}/after/{offset}',
	  config: controllers.displayTrip
	}
];