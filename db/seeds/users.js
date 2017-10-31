const db = require('../../lib/data-helpers');

exports.seed = async (knex, Promise) => {
  await Promise.all([knex('users').del(), knex('saved_filters').del(), knex('saved_recipes').del(), knex('categories').del()]);
  const userID = await db(knex).createUser('test', 'test');
  await db(knex).saveFilterByType(userID, 'Cuisine', 'italian', false);
  await db(knex).createCategory(userID, 'Cool Food');
  await db(knex).createCategory(userID, 'Gator Food');
  await db(knex).saveRecipe(userID, 657159);
  await db(knex).saveRecipe(userID, 663351, 'Cool Food');
  await db(knex).saveRecipe(userID, 636360, 'Gator Food');
};
