module.exports = (knex) => {

  const createCategory = async (user_id, name) => {
    return await knex('categories').insert({ user_id, name }).returning('id');
  };

  const getUserCategories = async (userID) => {
    return await knex('categories').select('id', 'name').where('user_id', userID);
  };

  const renameCategory = async (categoryID, name) => {
    return await knex('categories').where('id', categoryID).update({ name });
  };

  const deleteCategory = async (categoryID) => {
    return await knex('categories').where('id', categoryID).del();
  };

  return { createCategory, getUserCategories, renameCategory, deleteCategory };
};