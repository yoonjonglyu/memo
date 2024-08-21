const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
  entry: {},
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon : 'public/favicon.ico'
    }),

    new FaviconsWebpackPlugin({
      logo: 'public/memo.png',
      favicons: {
        appName: 'Memo',
        appShortName: 'Memo',
        appDescription: 'crossplatform basic Planner Memo App',
        start_url: '/memo',
      },
    }),
  ],
};

module.exports = config;