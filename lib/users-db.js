const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {

  const createUser = async (name, password) => {
    const password_hash = await bcrypt.hash(password, saltRounds);
    const [id] = await knex('users').insert({ name, password_hash }).returning('id');
    return id;
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

  return { createUser, getUserByName, getUserByID, isValidLogin };
};