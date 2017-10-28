const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {

  const createUser = async (name, password) => {
    const password_hash = await bcrypt.hash(password, saltRounds);
    return await knex('users').insert({ name, password_hash }).returning('id');
  };

  const getUserByName = async (name) => {
    return await knex('users').select('id', 'name').where('name', name).first();
  };

  const getUserByID = async (id) => {
    return await knex('users').select('id', 'name').where('id', id).first();
  };

  const isValidLogin = async (name, password) => {
    const user = await knex('users').select().where('name', name).first();
    if(user && await bcrypt.compare(password, user.password_hash)) return true;
    return false;
  };

  const getUserFilters = async (userID) => {
    return await knex('saved_filters').join('filters', 'saved_filters.filter_id', '=', 'filters.id')
      .select('saved_filters.value', 'saved_filters.exclude', 'filters.id', 'filters.type', 'filters.key', 'filters.exclude_key')
      .where('user_id', userID);
  };

  const getUserCategories = async (userID) => {
    return await knex('categories').select('id', 'name').where('user_id', userID);
  };

  const getUserRecipes = async (userID, categoryID) => {
    const query = knex('saved_recipes').select('id', 'recipe_id').where('user_id', userID);
    if(categoryID) {
      query.andWhere('category_id', categoryID);
    }
    return await query;
  };

  const createCategory = async (user_id, name) => {
    return await knex('categories').insert({ user_id, name}).returning('id');
  };

  const renameCategory = async (categoryID, name) => {
    return await knex('categories').update({ name }).where('id', categoryID);
  };

  //deleteCategory(userID, name, categoryID)

  //saveRecipe(userID, recipeID, [categoryID])

  //categorizeRecipe(userID, recipeID, categoryID)

  //deleteRecipe(userID, recipeID)

  //saveFilter(userID, filterTypeID, value) returns saved filter ID, send it to the client

  //deleteFilter(userID, savedFilterID)

  //updateFilter(userID, savedFilterID, value)

  return { createUser, getUserByName, getUserByID, isValidLogin, getUserFilters, getUserCategories, getUserRecipes, createCategory, renameCategory };
};