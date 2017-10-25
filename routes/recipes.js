require('dotenv').config();
const express = require('express');
const rp = require('request-promise-native');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('placeholder');
});

router.get('/:id', (req, res) => {
  const options = {
    uri: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information`,
    headers: {
      'X-Mashape-Key': process.env.MASHAPE_KEY,
    }
  };
  rp(options).then(data => res.send(data));
});

module.exports = router;