const webpack = require('webpack');
const pkg = require('./package.json');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const libraryName= pkg.name;

module.exports = {
  entry: path.join(__dirname, './dev/index.js'),
  plugins: [
    new HtmlWebPackPlugin({
      template: './dev/index.html',
      filename: './index.html'
    })
  ],
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules : [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              name: '[name][md5:hash].[ext]',
              outputPath: 'assets/',
              publicPath: '/assets/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
      exclude: /\.module\.css$/
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, 'dev'),
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
        {
          loader: 'html-loader'
        }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader'],
      }
    ]
  }
};