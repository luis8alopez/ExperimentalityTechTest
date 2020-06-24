const Express = require('express');
const server = require('./config/server');

const app = new Express();
server(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`The app is listening on the port 3000`);
});

module.exports = app;
