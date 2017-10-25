module.exports = (knex) => {

  const filterInfo = ['id', 'type', 'unique', 'key', 'exclude_key', 'btn', 'exclude_btn', 'dropdown', 'text'];
  function getAllFilters() {
    return knex('filters').select(filterInfo);
  }

  function getFilter(filterID) {
    return knex('filters').select(filterInfo).where('id', filterID);
  }

  function getFilterOptions(filterID) {
    return knex('filter_options').select('key', 'display').where('filter_id', filterID);
  }

  return { getAllFilters, getFilter, getFilterOptions };
};