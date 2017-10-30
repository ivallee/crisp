const errors = require('./custom-errors');

module.exports = (db) => {

  const isValidLogin = async (req, res, next) => {
    const { name, password } = req.body;
    try {
      if(await db.isValidLogin(name, password)) return next();
      else next(new errors.InvalidLogin);
    }
    catch(err) {
      next(err);
    }
  };

  const isAuthenticated = (req, res, next) => {
    if(req.session.user_id) return next();
    next(new errors.NotLoggedIn);
  };

  const hasParams = function() {
    return (req, res, next) => {
      for(const param of [...arguments]) {
        if(!req.body[param]) return next(new errors.MissingParam(param));
      }
      next();
    };
  };

  const hasQueryParams = function() {
    return (req, res, next) => {
      for(const param of [...arguments]) {
        if(!req.query[param]) return next(new errors.MissingParam(param));
      }
      next();
    };
  };

  return { isValidLogin, isAuthenticated, hasParams, hasQueryParams };
};