const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'production';
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/src/index.jsx`,
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/src`
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{ loader: 'css-loader', options: { minimize: true, importLoaders: 1 } }, { loader: 'sass-loader' }]
            })
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: { minimize: true, importLoaders: 1 }
                    }
                ]
            })
        },
        { test: /\.jsx?$/, exclude: /node_modules/, loader: ['babel-loader'] },
        { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
        { test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=100000' },
        {
            test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: './index.html' }
    ]),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
