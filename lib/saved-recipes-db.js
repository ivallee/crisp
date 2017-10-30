module.exports = (knex) => {

  const saveRecipe = async (user_id, recipe_id, category_id = undefined) => {
    const recipe = { user_id, recipe_id };
    if(category_id) recipe.category_id = category_id;
    return await knex('saved_recipes').insert(recipe).returning('id');
  };

  const getUserRecipes = async (userID, categoryID) => {
    const query = knex('saved_recipes').select('recipe_id as id').where('user_id', userID);
    if(categoryID) {
      query.andWhere('category_id', categoryID);
    }
    return await query;
  };

  const categorizeRecipe = async (recipe_id, userID, category_id) => {
    return await knex('saved_recipes').where('recipe_id', recipe_id).andWhere('user_id', userID).update({ category_id });
  };

  const deleteRecipe = async (recipe_id, userID) => {
    return await knex('saved_recipes').where('recipe_id', recipe_id).andWhere('user_id', userID).del();
  };

  return { saveRecipe, getUserRecipes, categorizeRecipe, deleteRecipe };
};