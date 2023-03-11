const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Output Management',
  //   }),
  // ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',
      },
    ],
  },
};
