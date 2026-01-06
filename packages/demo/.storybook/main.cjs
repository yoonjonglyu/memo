const webpack = require('webpack');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        postcss: true, // PostCSS 사용 활성화
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // Webpack 설정을 직접 수정하여 PostCSS 로더가 확실히 작동하게 합니다.
  webpackFinal: async config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        googleCID: JSON.stringify('test'),
        googleDevKey: JSON.stringify('test'),
      })
    );
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('@tailwindcss/postcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: /src/,
    });
    return config;
  },
  staticDirs: ['../public'],
};
