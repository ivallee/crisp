
exports.up = function(knex) {
  return knex.schema.table('filter_options', table => {
    table.integer('display_order');
  });
};

exports.down = function(knex) {
  return knex.schema.table('filter_options', table => {
    table.dropColumn('display_order');
  });
};
