let {
  MONGOURI
} = process.env;

const MONGODB_OPTIONS = { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true };
const morganMode = process.env.DEV ? 'dev' : 'tiny';

module.exports = {
  morganMode,
  MONGODB_OPTIONS,
  MONGOURI
};
