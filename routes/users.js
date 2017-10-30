const express = require('express'),
  router = express.Router();

module.exports = (db) => {
  const check = require('../lib/route-helpers')(db);

  router.post('/new', check.hasParams('name', 'password'), async (req, res, next) => {
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

  router.post('/login', check.hasParams('name', 'password'), check.isValidLogin, async (req, res, next) => {
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

  router.get('/current', async (req, res) => {
    if(req.session.user_id) {
      const user = await db.getUserByID(req.session.user_id);
      res.send(user);
    } else {
      res.send();
    }
  });

  router.use('/categories', require('./categories')(db));
  router.use('/recipes', require('./saved-recipes')(db));
  router.use('/filters', require('./saved-filters')(db));

  return router;
};