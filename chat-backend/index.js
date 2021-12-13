const express = require('express');

const config = require('./config/app');

const app = express();

app.get('/home', (req, res) => {
  return res.send('Home screen');
});

app.listen(config.appPort, () => {
  console.log(`Server listening on port ${config.appPort}`);
})