const errors = require('./custom-errors.js');

module.exports = (knex) => {

  const createCategory = async (user_id, name) => {
    return await knex('categories').insert({ user_id, name }).returning('id');
  };

  const getUserCategories = async (userID) => {
    return await knex('categories').select('id', 'name').where('user_id', userID);
  };

  const renameCategory = async (categoryID, userID,  name) => {
    await knex('categories').where('id', categoryID).andWhere('user_id', userID).update({ name });
  };

  const deleteCategory = async (category, userID) => {
    const { category_id } = await knex('categories').first('id as category_id').where('name', category);
    if(category_id ) {
      await knex('saved_recipes').where('category_id', category_id).andWhere('user_id', userID).update({ category_id: null });
      await knex('categories').where('id', category_id).andWhere('user_id', userID).del();
    } else {
      throw new errors.InvalidCategory(category);
    }
  };

  return { createCategory, getUserCategories, renameCategory, deleteCategory };
};