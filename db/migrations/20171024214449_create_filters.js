
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('filters', table => {
      table.increments();
      table.timestamps(true, true);
      table.string('type');
      table.boolean('unique');
      table.string('key');
      table.string('exclude_key');
      table.string('btn');
      table.string('exclude_btn');
      table.boolean('dropdown');
      table.boolean('text');
    }),
    knex.schema.createTable('filter_options', table => {
      table.increments();
      table.timestamps(true, true);
      table.integer('filter_id');
      table.foreign('filter_id').references('id').inTable('filters').onDelete('CASCADE');
      table.string('key');
      table.string('display');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('filter_options'),
    knex.schema.dropTable('filters')
  ]);
};
