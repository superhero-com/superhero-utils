const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const genConfig = (filename, { inlineCss } = {}) => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename,
    library: 'superheroUtils',
    libraryTarget: 'umd'
  },
  target: 'web',
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
  genConfig('index-without-styles.js'),
  genConfig('index.js', { inlineCss: true }),
];
