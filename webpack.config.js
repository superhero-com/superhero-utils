const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const genConfig = (outputFilename, { inlineCss, inputFilename = 'index.js' } = {}) => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFilename,
    library: 'superheroUtils',
    libraryTarget: 'umd'
  },
  entry: {
    entry: `./src/${inputFilename}`,
  },
  target: 'web',
  externals: {
    'prop-types': 'prop-types',
    'react': 'react'
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
        test: /\.(png|jpg|gif)$/,
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
  genConfig('button-react.js', { inputFilename: 'button-react.js'}),
];
