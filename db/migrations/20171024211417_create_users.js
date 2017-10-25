
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.timestamps(true, true);
    table.string('name');
    table.string('password_hash');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
