const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const genConfig = (filename, { inlineCss } = {}) => ({
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename,
    library: 'superheroButton',
    libraryExport: 'default',
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
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader',
      },
    ]
  },
  plugins: [
    ...inlineCss ? [] : [new MiniCssExtractPlugin({ filename: 'style.css' })],
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['*', '!*.css', '!*.js'],
      protectWebpackAssets: false
    })
  ],
});

module.exports = [
  genConfig('superhero-button.styles.js', { inlineCss: true }),
  genConfig('superhero-button.js'),
];
