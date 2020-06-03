const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'public', 'components', 'main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
