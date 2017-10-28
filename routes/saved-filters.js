const express = require('express'),
  router = express.Router();

module.exports = (db) => {
  const check = require('../lib/route-helpers')(db);
  router.use(check.isAuthenticated);

  router.route('/').post(check.hasParams('filter', 'value', 'exclude'), async (req, res, next) => {
    try {
      const { filter, value, exclude } = req.body;
      const id = await db.saveFilter(req.session.user_id, filter, value, exclude);
      res.status(201).send({ message: 'Filter saved', id });
    } catch(err) {
      next(err);
    }
  })
    .get(async (req, res, next) => {
      try {
        const filters = await db.getUserFilters(req.session.user_id, req.body.category);
        res.send(filters);
      } catch(err) {
        next(err);
      }
    })
    .put(check.hasParams('filter', 'value', 'exclude'), async (req, res, next) => {
      try {
        const { filter, value, exclude } = req.body;
        await db.updateFilter(filter, req.session.user_id, value, exclude);
        res.send({ message: `Filter ${filter} updated` });
      } catch(err) {
        next(err);
      }
    })
    .delete(check.hasParams('filter'), async (req, res, next) => {
      try {
        await db.deleteFilter(req.body.filter, req.session.user_id);
        res.send({ message: `Filter ${req.body.filter} deleted` });
      } catch(err) {
        next(err);
      }
    });

  return router;
};