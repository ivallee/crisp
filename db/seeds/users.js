const db = require('../../lib/users-db');

exports.seed = async (knex) => {
  await knex('users').del();
  await db(knex).createUser('test', 'test');
};
