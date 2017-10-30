const db = require('../../lib/data-helpers');

exports.seed = async (knex) => {
  await knex('users').del();
  const userID = await db(knex).createUser('test', 'test');
  await db(knex).saveFilterByType(userID, 'Cuisine', 'italian', false);
};
