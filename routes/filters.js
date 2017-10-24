const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('This is the part where we have filters');
  });

  return router;
};