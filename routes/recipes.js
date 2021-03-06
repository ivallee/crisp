require('dotenv').config();
const express = require('express');
const rp = require('request-promise-native');
const errors = require('../lib/custom-errors.js');
const router = express.Router();

router.get('/search/:query', (req, res, next) => {
  let request = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${req.params.query}`;
  request += '&addRecipeInformation=true&limitLicense=true&instructionsRequired=true&number=20';
  if(!req.params.query.includes('&diet=')) {
    request += '&diet=vegetarian';
  }
  console.log(request);
  const options = {
    uri: request,
    headers: {'X-Mashape-Key': process.env.MASHAPE_KEY }
  };
  rp(options)
    .then(data => res.send(data))
    .catch(error => {
      if(error.statusCode === 404) next(new errors.RecipeNotFound(req.params.id));
      else next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const options = {
    uri: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${req.params.id}/information?includeNutrition=false`,
    headers: {'X-Mashape-Key': process.env.MASHAPE_KEY }
  };
  rp(options)
    .then(data => res.send(data))
    .catch(error => {
      if(error.statusCode === 404) next(new errors.RecipeNotFound(req.params.id));
      else next(error);
    });
});

module.exports = router;