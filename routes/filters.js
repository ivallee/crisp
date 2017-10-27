const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    req.session.alice = 'the camel';
    db.getFilterTypes()
      .then(filters => res.send(JSON.stringify(filters)));
  });

  router.get('/:id', (req, res) => {
    db.getFilter(req.params.id)
      .then(filter => res.send(JSON.stringify(filter)));
  });

  return router;
};