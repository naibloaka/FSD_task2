const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
}

module.exports = {
  externals: {
    paths: PATHS,
  },
  // context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['@babel/polyfill', PATHS.src],
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@blocks': path.resolve(__dirname, 'src/blocks'), // easy path
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: {
        loader: 'babel-loader',
      },
      exclude: '/node_modules/',
    }, {
      test: /\.pug$/,
      loader: 'pug-loader',
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: { path: `${PATHS.src}/postcss.config.js` },
          },
        },
      ],
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: { path: `${PATHS.src}/postcss.config.js` },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],

    },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        },
      ],

    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
    },
    {
      test: /\.xml$/,
      use: [{
        loader: 'xml-loader',
      }],
    },
    {
      test: /\.csv$/,
      use: [{
        loader: 'csv-loader',
      }],
    },
    ],

  },
  optimization: { // libraries
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/index.pug`,
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/fonts`, to: `${PATHS.dist}/fonts` },
      { from: `${PATHS.src}/img`, to: `${PATHS.dist}/img` },
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    // new CleanWebpackPlugin(),
  ],
}
