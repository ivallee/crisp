const db = require('../../lib/data-helpers');

exports.seed = async (knex, Promise) => {
  await Promise.all([knex('users').del(), knex('saved_filters').del(), knex('saved_recipes').del(), knex('categories').del()]);
  const userID = await db(knex).createUser('user@example.com', 'prefegator');
  await db(knex).createCategory(userID, 'Breakfast');
  await db(knex).createCategory(userID, 'Appies');
  await db(knex).createCategory(userID, 'Soups');
  await db(knex).createCategory(userID, 'Weeknights');
  await db(knex).createCategory(userID, 'Noodles');
  await db(knex).createCategory(userID, 'Pastries');
  await db(knex).saveRecipe(userID, 511736, 'Breakfast');
  await db(knex).saveRecipe(userID, 640194, 'Breakfast');
  await db(knex).saveRecipe(userID, 640443, 'Breakfast');
  await db(knex).saveRecipe(userID, 643450, 'Breakfast');
  await db(knex).saveRecipe(userID, 648647, 'Breakfast');
  await db(knex).saveRecipe(userID, 665040, 'Breakfast');
  await db(knex).saveRecipe(userID, 647065, 'Appies');
  await db(knex).saveRecipe(userID, 651245, 'Appies');
  await db(knex).saveRecipe(userID, 655400, 'Appies');
  await db(knex).saveRecipe(userID, 640680, 'Soups');
  await db(knex).saveRecipe(userID, 660410, 'Soups');
  await db(knex).saveRecipe(userID, 661223, 'Soups');
};
