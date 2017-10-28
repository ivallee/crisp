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

  const categorizeRecipe = async (id, category_id) => {
    return await knex('saved_recipes').where('id', id).update({ category_id });
  };

  const deleteRecipe = async (id) => {
    return await knex('saved_recipes').where('id', id).del();
  };

  return { saveRecipe, getUserRecipes, categorizeRecipe, deleteRecipe };
};