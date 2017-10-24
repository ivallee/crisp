require('dotenv').config();
const WEBPACK_PORT = process.env.WEBPACK_PORT || 3000;
const EXPRESS_PORT = process.env.EXPRESS_PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const ENV = process.env.ENV || 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');

const express = require('express');

const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
})
  .listen(WEBPACK_PORT, HOST, (err) => {
    if(err) {
      console.log(err);
    }
    console.log(`Webpack running at http://${HOST}:${WEBPACK_PORT}`);
  });


const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Express running at http://${HOST}:${EXPRESS_PORT}`);
});