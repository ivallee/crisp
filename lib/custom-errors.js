class RecipeNotFound extends Error {
  constructor(id, ...params) {
    super(...params);
    this.status = 404;
    this.message = `Recipe with id ${id} not found`;
  }
}

class InvalidLogin extends Error {
  constructor(...params) {
    super(...params);
    this.status = 401;
    this.message = 'Invalid username or password';
  }
}

class NotLoggedIn extends Error {
  constructor(...params) {
    super(...params);
    this.status = 401;
    this.message = 'Login required';
  }
}

class MissingParam extends Error {
  constructor(param, ...params) {
    super(...params);
    this.status = 422;
    this.message = `Required parameter missing: ${param}`;
  }
}

class InvalidCategory extends Error {
  constructor(category, ...params) {
    super(...params);
    this.status = 422;
    this.message = `Invalid category: ${category}`;
  }
}

module.exports = { RecipeNotFound, InvalidLogin, NotLoggedIn, MissingParam, InvalidCategory };