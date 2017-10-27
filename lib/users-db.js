// const Promise = require('promise');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (knex) => {

  function createUser(name, password) {
    return bcrypt.hash(password, saltRounds)
      .then(password_hash => knex('users').insert({ name, password_hash }).returning('id'));
  }

  // function _isValidPassword(password) {
  //   return true;
  // }

  async function isValidLogin(name, password) {
    const user = await knex('users').select().where('name', name).first();
    console.log(user);
    if (user && await bcrypt.compare(password, user.password_hash)) return user.id;
    return false;
  }

  return { createUser, isValidLogin };
};