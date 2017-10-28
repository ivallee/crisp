module.exports = (knex) => {

  const createCategory = async (user_id, name) => {
    return await knex('categories').insert({ user_id, name }).returning('id');
  };

  const getUserCategories = async (userID) => {
    return await knex('categories').select('id', 'name').where('user_id', userID);
  };

  const renameCategory = async (categoryID, userID,  name) => {
    console.log('updating');
    return await knex('categories').where('id', categoryID).andWhere('user_id', userID).update({ name });
  };

  const deleteCategory = async (categoryID, userID) => {
    console.log('deleting');
    return await knex('categories').where('id', categoryID).andWhere('user_id', userID).del();
  };

  return { createCategory, getUserCategories, renameCategory, deleteCategory };
};