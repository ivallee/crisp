module.exports = (knex) => {

  const saveFilter = async (user_id, filter_id, value, exclude) => {
    return await knex('saved_filters').insert({ user_id, filter_id, value, exclude });
  };

  const getUserFilters = async (userID) => {
    return await knex('saved_filters').join('filters', 'saved_filters.filter_id', '=', 'filters.id')
      .select('saved_filters.value', 'saved_filters.exclude', 'filters.id', 'filters.type', 'filters.key', 'filters.exclude_key')
      .where('user_id', userID);
  };

  const deleteFilter = async (id) => {
    return await knex('saved_filters').where('id', id).del();
  };

  const updateFilter = async (id, value, exclude) => {
    const filter = { value };
    if(typeof exclude !== 'undefined') filter.exclude = exclude;
    return await knex('saved_filters').where('id', id).update(filter);
  };

  return { saveFilter, getUserFilters, deleteFilter, updateFilter };
};