module.exports = (knex) => {

  const saveFilterByType = async (user_id, filter_type, value, exclude) => {
    const { id } = await knex('filters').first('id').where('type', filter_type);
    return await saveFilter(user_id, id, value, exclude);
  };

  const saveFilter = async (user_id, filter_id, value, exclude) => {
    return await knex('saved_filters').insert({ user_id, filter_id, value, exclude }).returning('id');
  };

  const getUserFilters = async (userID) => {
    const filters = await knex('saved_filters').join('filters', 'saved_filters.filter_id', '=', 'filters.id')
      .select(
      'saved_filters.id as saved_filter_id',
      'saved_filters.value',
      'saved_filters.exclude',
      'filters.id',
      'filters.type',
      'filters.key',
      'filters.exclude_key',
      'filters.btn',
      'filters.exclude_btn',
      'filters.dropdown',
      'filters.unique')
      .where('user_id', userID)
      .orderBy('saved_filters.id', 'desc');

    for(const filter of filters) {
      if(filter.dropdown) {
        filter.dropdown = await knex('filter_options').select('key', 'display').where('filter_id', filter.id);
      }
    }
    return filters;
  };

  const updateFilter = async (id, userID, value, exclude) => {
    const filter = { value };
    if(typeof exclude !== 'undefined') filter.exclude = exclude;
    return await knex('saved_filters').where('id', id).andWhere('user_id', userID).update(filter);
  };

  const deleteFilter = async (id, userID) => {
    return await knex('saved_filters').where('id', id).andWhere('user_id', userID).del();
  };

  return { saveFilterByType, saveFilter, getUserFilters, deleteFilter, updateFilter };
};