const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.getAllFilters()
      .then(filters => res.send(JSON.stringify(filters)));
  });

  router.get('/:id', (req, res) => {
    db.getFilter(req.params.id)
      .then(filter => res.send(JSON.stringify(filter)));
  });

  router.get('/:id/options', (req, res) => {
    db.getFilterOptions(req.params.id)
      .then(options => res.send(JSON.stringify(options)));
  });

  return router;
};