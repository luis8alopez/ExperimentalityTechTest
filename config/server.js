const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('../app/routes');
const express = require('express');

const app = new express();

dotenv.config();

const {
  port,
  morganMode,
  MONGO_URI,
  MONGODB_OPTIONS
} = require('./config');


//Quemar todo
mongoose.connect("mongodb+srv://root:root@technicaltest.fcvqp.mongodb.net/dllo?retryWrites=true&w=majority", MONGODB_OPTIONS);
const conn = mongoose.connection;
conn.once('open', () => { console.log('MongoDB Connected'); });
conn.on('error', (err) => { console.log('MongoDB connection error: ', err); });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(morganMode));
app.use(cors());
app.use('/', routes);

module.exports = app;
