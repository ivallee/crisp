module.exports = (knex) => {

  const saveFilterByType = async (user_id, filter_type, value, exclude) => {
    const { id } = await knex('filters').first('id').where('type', filter_type);
    console.log(id);
    return await saveFilter(user_id, id, value, exclude);
  };

  const saveFilter = async (user_id, filter_id, value, exclude) => {
    return await knex('saved_filters').insert({ user_id, filter_id, value, exclude }).returning('id');
  };

  const getUserFilters = async (userID) => {
    return await knex('saved_filters').join('filters', 'saved_filters.filter_id', '=', 'filters.id')
      .select('saved_filters.id', 'saved_filters.value', 'saved_filters.exclude', 'filters.id as filter_id', 'filters.type', 'filters.key', 'filters.exclude_key')
      .where('user_id', userID);
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