const express = require('express'),
  router = express.Router();

module.exports = (db) => {
  const check = require('../lib/route-helpers')(db);
  router.use(check.isAuthenticated);

  router.route('/')
    .post(check.hasParams('recipe_id'), async (req, res, next) => {
      try {
        const { recipe_id, category } = req.body;
        const recipes = await db.getUserRecipes(req.session.user_id);
        console.log(recipes);
        if(recipes.some(recipe => recipe.recipe_id === parseInt(recipe_id))) {
          return res.send({ message: `Recipe ${recipe_id} already saved by this user` });
        }
        const id = await db.saveRecipe(req.session.user_id, recipe_id, category);
        res.status(201).send({ message: `Recipe ${recipe_id} saved`, id });
      } catch(err) {
        next(err);
      }
    })
    .get(async (req, res, next) => {
      try {
        const recipes = await db.getUserRecipes(req.session.user_id);
        res.send(recipes);
      } catch(err) {
        next(err);
      }
    })
    .put(check.hasParams('recipe', 'category'), async (req, res, next) => {
      try {
        const { recipe, category } = req.body;
        await db.categorizeRecipe(recipe, req.session.user_id, category);
        res.send({ message: `Recipe ${recipe} moved to category ${category}` });
      } catch(err) {
        next(err);
      }
    })
    .delete(check.hasParams('recipe'), async (req, res, next) => {
      try {
        await db.deleteRecipe(req.body.recipe, req.session.user_id);
        res.send({ message: `Recipe ${req.body.recipe} deleted` });
      } catch(err) {
        next(err);
      }
    });

  router.get('/:category', async (req, res, next) => {
    try {
      const recipes = await db.getUserRecipes(req.session.user_id, req.params.category);
      res.send(recipes);
    } catch(err) {
      next(err);
    }
  });

  return router;
};