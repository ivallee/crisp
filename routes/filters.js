const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.getFilters()
      .then(filters => res.send(JSON.stringify(filters)));
  });

  return router;
};