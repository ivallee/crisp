const filters = require('./filters-db');
const users = require('./users-db');

module.exports = (knex) => {
  return { ...filters(knex), ...users(knex) };
};