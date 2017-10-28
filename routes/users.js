const express = require('express'),
  router = express.Router();

module.exports = (db) => {
  const check = require('../lib/route-helpers')(db);

  router.post('/new', async (req, res, next) => {
    try {
      const { name, password } = req.body;
      const id = await db.createUser(name, password).catch(next);
      req.session.user_id = id;
      res.send(`Created user ${id}`);
    }
    catch(err) {
      next(err);
    }
  });

  router.post('/login', check.isValidLogin, async (req, res, next) => {
    try {
      const user = await db.getUserByName(req.body.name);
      req.session.user_id = user.id;
      res.send({ message: 'Login successful', success: true });
    }
    catch(err) {
      next(err);
    }
  });

  router.post('/logout', (req, res) => {
    req.session = null;
    res.send({ message: 'Logout successful' });
  });

  router.get('/current', check.isAuthenticated, (req, res) => {
    res.send(res.locals.user);
  });

  router.use('/categories', require('./categories')(db));

  return router;
};