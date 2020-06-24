 let {
   DB_USER,
   DB_PASS,
   DB_HOST
 } = process.env;

const MONGODB_OPTIONS = { useNewUrlParser: true, useFindAndModify: false };
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
const port = process.env.DEV ? process.env.PORT : 5000;
const morganMode = process.env.DEV ? 'dev' : 'tiny';

module.exports = {
  port,
  morganMode,
  MONGO_URI,
  MONGODB_OPTIONS
};
