const express = require('express');
const config = require('./config/app');
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

app.listen(config.appPort, () => {
  console.log(`Server listening on port ${config.appPort}`);
})