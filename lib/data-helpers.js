const filters = require('./filters-db');
const users = require('./users-db');

module.exports = (knex) => {
  return Object.assign(filters(knex), users(knex));
};