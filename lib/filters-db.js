module.exports = (knex) => {

  const getFilterTypes = async () => {
    return await knex('filters').select('id', 'type', 'key', 'exclude_key');
  };

  const getFilter = async (filterID) => {
    const filterInfo = ['id', 'type', 'unique', 'key', 'exclude_key', 'btn', 'exclude_btn', 'dropdown', 'text'];
    const filter = await knex('filters').first(filterInfo).where('id', filterID);
    if(filter.dropdown) {
      const options = await knex('filter_options').select('key', 'display').where('filter_id', filter.id);
      filter.dropdown = options;
    }
    return filter;
  };

  return { getFilterTypes, getFilter };
};