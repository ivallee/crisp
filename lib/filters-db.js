module.exports = (knex) => {

  function getFilterTypes() {
    return knex('filters').select('id', 'type', 'key', 'exclude_key');
  }

  function getFilter(filterID) {
    const filterInfo = ['id', 'type', 'unique', 'key', 'exclude_key', 'btn', 'exclude_btn', 'dropdown', 'text'];
    return knex('filters').first(filterInfo).where('id', filterID)
      .then(_addFilterOptions);
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