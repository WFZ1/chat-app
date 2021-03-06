const jwt = require('jsonwebtoken');
const config = require('../config/app');

exports.auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing token!'});
  }

  try {
    const user = jwt.verify(token, config.appKey);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: err });
  }
}