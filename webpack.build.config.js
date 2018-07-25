const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: './src/js/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'postcss.config.js',
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg$)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader?bypassOnDebug',
        ],
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      // },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('app.[hash].css'),
  ],
};
