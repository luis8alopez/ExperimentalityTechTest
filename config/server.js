/**
 * NPM required packages
 */
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

/**
 * Routes to the different resources
 */
const routes = require('../app/routes');

/**
 * Importing configuration variables
 */
const {
  port,
  morganMode,
  MONGO_URI,
  MONGODB_OPTIONS
} = require('./config');

/**
 * Sets up the server configuration to an Express app
 * @param {*} app Basic Express app
 */
const server = (app) => {
  mongoose.connect(MONGO_URI, MONGODB_OPTIONS, (err) => {
    if (err) {
      return console.log('Error while connecting to Mongo database');
    }
    console.log('Succesfull Mongo database connection!');
  });

  app.set('port', port);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan(morganMode));
  app.use(cors());
  app.use('/', routes);
};

module.exports = server;
