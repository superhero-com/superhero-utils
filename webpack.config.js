const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const dir = path.resolve(__dirname, "./src/");
module.exports = {
  entry: {
    'index': './index.js',
    'widget': './widget.js',
    'style': './v1/style.css' 
  },
  context: dir,
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          }
        ]
      },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css" 
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'v1', 'icon.html'),
      filename: 'v1/icon.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'v1', 'large.html'),
      filename: 'v1/large.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'v1', 'medium.html'),
      filename: 'v1/medium.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'v1', 'small.html'),
      filename: 'v1/small.html',
      inject: false
    }),
    new CopyPlugin([
      { from: 'img', to: 'img' },
    ]),
  ]
}