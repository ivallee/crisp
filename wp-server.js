require('dotenv').config();
const WEBPACK_PORT = process.env.WEBPACK_PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

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
