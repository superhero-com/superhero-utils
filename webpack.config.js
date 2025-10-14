const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const genConfig = (name, { inlineCss } = {}) => ({
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}${inlineCss ? '' : '-without-styles'}.js`,
    library: 'superheroUtils',
    libraryTarget: 'umd'
  },
  entry: path.resolve(__dirname, 'src', `${name}.js`),
  target: 'web',
  externals: {
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'PropTypes',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          inlineCss ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'url-loader',
      },
    ]
  },
  plugins: [
    ...inlineCss ? [] : [new MiniCssExtractPlugin({ filename: 'index.css' })],
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [] }),
  ],
});

module.exports = [
  genConfig('index'),
  genConfig('index', { inlineCss: true }),
  genConfig('react'),
  genConfig('vue'),
];
