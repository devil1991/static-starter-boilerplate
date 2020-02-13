const path = require('path');

module.exports = {
  entry: './assets/js/main.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public', 'js')
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'modules'),
      lib: path.resolve(__dirname, 'assets/js/lib')
    }
  }
};
