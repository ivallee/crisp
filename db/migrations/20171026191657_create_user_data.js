
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('saved_filters', table => {
      table.increments();
      table.timestamps(true, true);
      table.integer('user_id');
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.integer('filter_id');
      table.foreign('filter_id').references('id').inTable('filters').onDelete('CASCADE');
      table.string('value');
      table.boolean('exclude');
    }),
    knex.schema.createTable('categories', table => {
      table.increments();
      table.timestamps(true, true);
      table.integer('user_id');
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.string('name');
    }),
    knex.schema.createTable('saved_recipes', table => {
      table.increments();
      table.timestamps(true, true);
      table.integer('recipe_id');
      table.integer('user_id');
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.integer('category_id');
      table.foreign('category_id').references('id').inTable('categories').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('saved_filters'),
    knex.schema.dropTable('saved_recipes'),
    knex.schema.dropTable('categories')
  ]);
};
