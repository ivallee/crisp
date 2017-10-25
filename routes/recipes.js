require('dotenv').config();
const express = require('express');
const rp = require('request-promise-native');
const base64url = require('base64url');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('placeholder');
});

router.get('/search/:query', (req, res) => {
  

  console.log(req.params.query);
  res.send('i got this!');


  // const options = {
  //   uri: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information`,
  //   headers: {
  //     'X-Mashape-Key': process.env.MASHAPE_KEY,
  //   }
  // };
  // rp(options).then(data => res.send(data));
});
// For recipe details page
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const options = {
    uri: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information`,
    headers: {
      'X-Mashape-Key': process.env.MASHAPE_KEY,
    }
  };
  rp(options).then(data => res.send(data));
});



module.exports = router;