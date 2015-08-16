var path = require('path');

var config = {
  entry: {
      bundle: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/components/index')],
      modal: [path.resolve(__dirname, 'src/components/modal')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'babel?stage=1']
      }
    ]
  }
};

module.exports = config;
