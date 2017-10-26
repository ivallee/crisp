class RecipeNotFound extends Error {
  constructor(id, ...params) {
    super(...params);
    this.status = 404;
    this.message = `Recipe with id ${id} not found`;
  }
}

module.exports = { RecipeNotFound };