const express = require('express'),
  router = express.Router();

module.exports = (db) => {
  const check = require('../lib/route-helpers')(db);

  router.post('/new', async (req, res, next) => {
    console.log('body:', req.body);
    const { name, password } = req.body;
    const id = await db.createUser(name, password).catch(next);
    res.send(`Created user ${id}`);
  });

  router.post('/login', check.isValidLogin, async (req, res, next) => {
    const user = await db.getUserByName(req.body.name).catch(next);
    req.session.user_id = user.id;
    res.send('Login successful');
  });

  router.post('/logout', (req, res) => {
    req.session = null;
    res.send('Logout successful');
  });

  return router;
};