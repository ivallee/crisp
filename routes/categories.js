const express = require('express'),
  router = express.Router();

module.exports = (db) => {
  const check = require('../lib/route-helpers')(db);
  router.use(check.isAuthenticated);

  router.route('/').post(async (req, res, next) => {
    try {
      const id = await db.createCategory(check.hasParams('name'), req.session.user_id, req.body.name);
      res.status(201).send({ message: `Category ${id} created`, id });
    } catch(err) {
      next(err);
    }
  })
    .get(async (req, res, next) => {
      try {
        const categories = await db.getUserCategories(req.session.user_id);
        res.send(categories);
      } catch(err) {
        next(err);
      }
    })
    .put(check.hasParams('category', 'name'), async (req, res, next) => {
      try {
        const { category, name } = req.body;
        await db.renameCategory(category, req.session.user_id, name);
        res.send({ message: `Category ${category} renamed to ${name}` });
      } catch(err) {
        next(err);
      }
    })
    .delete(check.hasParams('category'), async (req, res, next) => {
      try {
        await db.deleteCategory(req.body.category, req.session.user_id);
        res.send({ message: `Category ${req.body.category} deleted` });
      } catch(err) {
        next(err);
      }
    });

  return router;
};