const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
  },
  devServer: {
    port: 5500,
    contentBase: this.devServer,
    overlay: true,
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@blocks': path.resolve(__dirname, 'src/blocks'), // easy path
      '@': path.resolve(__dirname, 'src'),
    },
  },
  /* optimization: { // libraries
    splitChunks: {
      chunks: 'all',
    },
  }, */

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
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

      },
      {
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
          },
        ],
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
      filename: '[name].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlWebpackPlugin({
      template: './pages/number-page/number-page.pug',
      filename: 'number-page.html',
    }),
    new CopyWebpackPlugin([
      { from: './fonts', to: './fonts' },
      { from: './img', to: './img' },
    ]),
    new HtmlWebpackPlugin({
      template: './pages/welcome-page/welcome-page.pug',
      filename: 'welcome.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/review-page/review-page.pug',
      filename: 'review-page.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/register-page/register-page.pug',
      filename: 'register-page.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/login-page/login-page.pug',
      filename: 'login-page.html',
    }),
    new HtmlWebpackPlugin({
      template: './ui-kit/colors.pug',
      filename: 'colors.html',
    }),
    new HtmlWebpackPlugin({
      template: './ui-kit/cards.pug',
      filename: 'cards.html',
    }),
    new HtmlWebpackPlugin({
      template: './ui-kit/headers-and-footers.pug',
      filename: 'headers-and-footers.html',
    }),
    new HtmlWebpackPlugin({
      template: './ui-kit/Form-elements.pug',
      filename: 'Form-elements.html',
    }),
    // new CleanWebpackPlugin(),
  ],

  /* resolve: {
    modules: ['node_modules'],
    alias: {
      'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js',
      // images: path.resolve(__dirname, 'dist/img/'),
    },
  }, */
};
