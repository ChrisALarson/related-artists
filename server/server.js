// const nr = require('newrelic');
const app = require('./app.js');
const { PORT } = require('../.env.js');

app.listen(PORT, console.log(`App listening on port ${PORT}!`));
