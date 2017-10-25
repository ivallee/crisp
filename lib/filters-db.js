module.exports = (knex) => {
  function getFilters() {
    return knex('filters').select();
  }

  return { getFilters };
};