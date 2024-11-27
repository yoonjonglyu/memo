const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

dotenv.config();
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
      meta: {
        description: 'crossplatform basic Planner Memo App',
      },
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
    new DefinePlugin({
      googleCID: JSON.stringify(process.env.googleClientId),
      googleDevKey: JSON.stringify(process.env.googleDevKey),
    }),
  ],
};

module.exports = config;
