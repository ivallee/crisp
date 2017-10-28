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

  router.route('/categories')
    .post(check.isAuthenticated, async (req, res, next) => {
      try {
        const category_id = await db.createCategory(req.session.user_id, req.body.name);
        res.status(201).send({ message: `Category ${category_id} created`, category_id });
      } catch(err) {
        next(err);
      }
    })
    .get(check.isAuthenticated, async (req, res, next) => {
      try {
        const categories = await db.getUserCategories(req.session.user_id);
        res.send(categories);
      } catch(err) {
        next(err);
      }
    })
    .put(check.isAuthenticated, async (req, res, next) => {
      try {
        const {id, name} = req.body;
        await db.renameCategory(id, req.session.user_id, name);
        res.send(`Category ${id} renamed to ${name}`);
      } catch(err) {
        next(err);
      }
    })
    .delete(check.isAuthenticated, async (req, res, next) => {
      try {
        console.log('ID: ', req.body.id);
        await db.deleteCategory(req.body.id, req.session.user_id);
        res.send({ message:  `Category ${req.body.id} deleted`});
      } catch(err) {
        next(err);
      }
    });



  return router;
};