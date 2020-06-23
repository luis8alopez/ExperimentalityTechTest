/**
 * Server configuration
 */

const DB_PASS = "root";
const DB_USER = "root";
const DB_HOST = "technicaltest.fcvqp.mongodb.net/dllo?retryWrites=true&w=majority";

const MONGODB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
const port = process.env.DEV ? process.env.PORT : 5000;
const morganMode = process.env.DEV ? 'dev' : 'tiny';

module.exports = {
  port,
  morganMode,
  MONGO_URI,
  MONGODB_OPTIONS
};
