const filters = require('./filters-db');

module.exports = (knex) => {
  return Object.assign(filters(knex));
};