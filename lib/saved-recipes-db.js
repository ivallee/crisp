module.exports = (knex) => {

  const saveRecipe = async (user_id, recipe_id, category_id = undefined) => {
    const recipe = { user_id, recipe_id };
    if(category_id) recipe.category_id = category_id;
    return await knex('saved_recipes').insert(recipe).returning('id');
  };

  const getUserRecipes = async (userID, categoryID) => {
    const query = knex('saved_recipes').select('id', 'recipe_id').where('user_id', userID);
    if(categoryID) {
      query.andWhere('category_id', categoryID);
    }
    return await query;
  };

  const categorizeRecipe = async (id, userID, category_id) => {
    return await knex('saved_recipes').where('id', id, 'user_id', userID).update({ category_id });
  };

  const deleteRecipe = async (id, userID) => {
    return await knex('saved_recipes').where('id', id, 'user_id', userID).del();
  };

  return { saveRecipe, getUserRecipes, categorizeRecipe, deleteRecipe };
};