const models = require('../models/index');
const query = require('./helpers/query');

module.exports = {
  redirectToApp: {
    handler(req, reply) {
      reply.redirect('http://www.seanowiecki.com/Odyssey-client/');
    }
  },
  findTrip: {
    handler(req, reply) {
      query.findTrip(req, reply);
    }
  },
  findBike: {
    handler(req, reply) {
      query.findBike(req, reply);
    }
  }
};
