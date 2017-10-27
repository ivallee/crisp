const errors = require('./custom-errors');

module.exports = (db) => {

  const isValidLogin = async (req, res, next) => {
    const { name, password } = req.body;
    try {
      if(await db.isValidLogin(name, password)) return next();
      else next(new errors.InvalidLogin);
    }
    catch (err) {
      next(err);
    }
  };

  const isAuthenticated = (req, res, next) => {
    console.log(res.locals.user);
    if(res.locals.user) return next();
    next(new errors.NotLoggedIn);
  };

  return { isValidLogin, isAuthenticated };
};