const errors = require('./custom-errors.js');

module.exports = (knex) => {

  const saveRecipe = async (user_id, recipe_id, categoryName = undefined) => {
    const recipe = { user_id, recipe_id };
    if(categoryName){
      const category = await knex('categories').first('id').where('name', categoryName);
      recipe.category_id = category && category.id;
      console.log(recipe);
    }
    return await knex('saved_recipes').insert(recipe).returning('id');
  };

  const getUserRecipes = async (userID, categoryID) => {
    const query = knex('saved_recipes')
      .leftOuterJoin('categories', 'saved_recipes.category_id', '=', 'categories.id')
      .select('saved_recipes.recipe_id as id', 'categories.name as category')
      .where('saved_recipes.user_id', userID)
      .orderBy('saved_recipes.recipe_id');
    if(categoryID) {
      query.andWhere('saved_recipes.category_id', categoryID);
    }
    return await query;
  };

  const categorizeRecipe = async (recipe_id, userID, category) => {
    const { category_id } = category ? await knex('categories').first('id as category_id').where('name', category) : {category_id: null};
    if(category_id || !category) {
      return await knex('saved_recipes').where('recipe_id', recipe_id).andWhere('user_id', userID).update({ category_id });
    } else {
      throw new errors.InvalidCategory(category);
    }
  };

  const deleteRecipe = async (recipe_id, userID) => {
    return await knex('saved_recipes').where('recipe_id', recipe_id).andWhere('user_id', userID).del();
  };

  return { saveRecipe, getUserRecipes, categorizeRecipe, deleteRecipe };
};