const errors = require('../lib/custom-errors.js');

const errorTypes = Object.keys(errors).map(key => errors[key]);

module.exports = (err, req, res, next) => {
  console.error('Error:', err.message);
  if(errorTypes.some(type => err instanceof type)) {
    return res.status(err.status).send(err.message);
  }
  return res.status(500).send('An internal error occured');
};