const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/src/index.jsx'),
  ],
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: './css/style.css',
      allChunks: true
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        // include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      }, {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader']
        }),
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        ]
      },

    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.jsx', '.js', 'png']
  },
  node: {
    dns: 'mock',
    net: 'mock'
  }
};
