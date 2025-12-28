const commonPaths = require('./common-paths');
const webpack = require('webpack');
const port = process.env.PORT || 38888;

const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.tsx`,
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|git)$/,
        loader: 'file-loader',
        options: {
          name: `[contenthash].[ext]`,
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: true, // 자동으로 postcss.config.js를 찾도록 설정
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    // 웹팩서버
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
};

module.exports = config;
