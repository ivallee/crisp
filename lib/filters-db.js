const Promise = require('promise');

module.exports = (knex) => {

  function getFilterTypes() {
    return knex('filters').select('id', 'type');
  }

  function getFilter(filterID = undefined) {
    const filterInfo = ['id', 'type', 'unique', 'key', 'exclude_key', 'btn', 'exclude_btn', 'dropdown', 'text'];
    let query = knex('filters').select(filterInfo);
    if(filterID) {
      query.where('id', filterID);
    }
    return query.then(filters => Promise.all(filters.map(_addFilterOptions)));
  }

  function _addFilterOptions(filter) {
    if(!filter.dropdown) return filter;
    return knex('filter_options').select('key', 'display').where('filter_id', filter.id)
    .then(options => {
      filter.dropdown = options;
      return filter;
    });
  }

  return { getFilterTypes, getFilter };
};