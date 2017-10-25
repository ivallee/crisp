const errors = require('../lib/custom-errors.js');

module.exports = (err, req, res, next) => {
  console.error('Error:', err.message);
  if(err instanceof errors.RecipeNotFound) {
    return res.status(err.status).send(err.message);
  }
  return res.status(500).send('An internal error occured');
};