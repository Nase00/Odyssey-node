const Hapi = require('hapi');
const Inert = require('inert');
const Mongoose = require('mongoose');

const dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost';

const server = new Hapi.Server();
const routes = require('./routes/index');

const connectionConfig = {
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
};

server.connection(connectionConfig);
server.register(Inert, () => {});
server.route(routes);

server.start((err) => {
  if (err) {
    throw err;
  }

  Mongoose.connect(dbURI);
  console.log(`Running at ${server.info.uri}`);
});

module.exports = {
  dbURI: dbURI
}
