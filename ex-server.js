require('dotenv').config();
const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const ENV = process.env.ENV || 'development';

const express = require('express');

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const db = require('./lib/data-helpers')(knex);

const filtersRoutes = require('./routes/filters');
const usersRoutes = require('./routes/users');
const recipesRoutes = require('./routes/recipes');
const errorHandler = require('./routes/error-handler.js');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/filters', filtersRoutes(db));
app.use('/users', usersRoutes(db));
app.use('/recipes', recipesRoutes);

app.use(errorHandler);

app.listen(EXPRESS_PORT, () => {
  console.log(`Express running at http://${HOST}:${EXPRESS_PORT}`);
});
