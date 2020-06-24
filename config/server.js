const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('../app/routes');

dotenv.config();

const {
  port,
  morganMode,
  MONGO_URI,
  MONGODB_OPTIONS
} = require('./config');

const server = (app) => {
  mongoose.connect(MONGO_URI, MONGODB_OPTIONS, (err) => {
    if (err) {
      return console.log('Error while connecting to Mongo database', err);
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
