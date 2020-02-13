const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './assets/js/main.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'assets/js/modules'),
      lib: path.resolve(__dirname, 'assets/js/lib')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};
