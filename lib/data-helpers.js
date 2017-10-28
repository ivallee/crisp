const filters = require('./filters-db');
const users = require('./users-db');
const recipes = require('./saved-recipes-db');
const categories = require('./categories-db');
const savedFilters = require('./saved-filters-db');

module.exports = (knex) => {
  return { ...filters(knex), ...users(knex), ...recipes(knex), ...categories(knex), ...savedFilters(knex) };
};