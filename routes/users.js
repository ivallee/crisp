const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send('This is the part where we have users');
  });

  router.post('/new', (req, res, next) => {
    const { name, password } = req.body;
    db.createUser(name, password)
      .then(id => res.send(`Created user ${id}`))
      .catch(next);
  });

  router.post('/login', (req, res, next) => {
    const { name, password } = req.body;
    db.isValidLogin(name, password)
      .then(id => res.send(`This is user ${id}`))
      .catch(next);
  });

  return router;
};