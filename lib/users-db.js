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

  function isValidLogin(name, password) {
    //return user id if that login info is valid
    // otherwise return undefined
  }

  return { createUser, isValidLogin };
};