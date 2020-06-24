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
  mongoose.connect(MONGO_URI, MONGODB_OPTIONS);
  const conn = mongoose.connection;
  conn.once('open', () => { console.log('MongoDB Connected'); });
  conn.on('error', (err) => { console.log('MongoDB connection error: ', err); });

  app.set('port', port);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan(morganMode));
  app.use(cors());
  app.use('/', routes);
};

module.exports = server;
