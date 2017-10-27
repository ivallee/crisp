const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {

  const createUser = async (name, password) => {
    const password_hash = await bcrypt.hash(password, saltRounds);
    return await knex('users').insert({ name, password_hash }).returning('id');
  };

  const getUserByName = async (name) => {
    return await knex('users').select().where('name', name).first();
  };

  const getUserByID = async (id) => {
    return await knex('users').select().where('id', id).first();
  };

  const isValidLogin = async (name, password) => {
    const user = await knex('users').select().where('name', name).first();
    if(user && await bcrypt.compare(password, user.password_hash)) return true;
    return false;
  };

  return { createUser, getUserByName, getUserByID, isValidLogin };
};