const express = require('express');

const config = require('./config/app');

const router = require('./router');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(config.appPort, () => {
  console.log(`Server listening on port ${config.appPort}`);
})