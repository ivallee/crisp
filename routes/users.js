const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send('This is the part where we have users');
  });

  router.post('/new', async (req, res, next) => {
    const { name, password } = req.body;
    const id = await db.createUser(name, password).catch(next);
    res.send(`Created user ${id}`);
  });

  router.post('/login', (req, res, next) => {
    const { name, password } = req.body;
    db.isValidLogin(name, password)
      .then(id => res.send(`This is user ${id}`))
      .catch(next);
  });

  return router;
};