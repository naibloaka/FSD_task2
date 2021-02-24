const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');//to check size
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, './../src'),
  dist: path.join(__dirname, './../dist'),
  assets: 'assets/',
}

module.exports = {
  experiments: {
    asset: true,
  },
  target: 'web',
  externals: {
    paths: PATHS,
  },

  entry: {
    styles: [`${PATHS.src}/index.js`],
    landingPage: ['@babel/polyfill', `${PATHS.src}/pages/landing-page/landingPage.js`],
    registrationPage: ['@babel/polyfill', `${PATHS.src}/pages/registration-page/registrationPage.js`],
    roomDetailsPage: ['@babel/polyfill', `${PATHS.src}/pages/room-details-page/roomDetailsPage.js`],
    searchRoomPage: ['@babel/polyfill', `${PATHS.src}/pages/search-room-page/searchRoomPage.js`],
    singinPage: ['@babel/polyfill', `${PATHS.src}/pages/singin-page/singinPage.js`],
    formElements: ['@babel/polyfill', `${PATHS.src}/ui-kit/formElements.js`],
    cards: ['@babel/polyfill', `${PATHS.src}/ui-kit/cards.js`],
  },

  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    // publicPath: '/',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },

  optimization: { // libraries
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',

        exclude: [/node_modules/],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            },
          },
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
              postcssOptions: { path: './postcss.config.js' },
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
        test: /\.svg$/,
        type: 'asset',
        use: 'svgo-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}img/`,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: `${PATHS.assets}fonts/`,
              // outputPath: 'fonts/',
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.assets}fonts` },
        { from: `${PATHS.src}/assets/img`, to: `${PATHS.assets}img` },
      ],
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/landing-page.pug`,
      filename: 'landing-page.html',
      chunks: ['styles', 'landingPage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/search-room-page.pug`,
      filename: 'search-room-page.html',
      chunks: ['styles', 'searchRoomPage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/room-details-page.pug`,
      filename: 'room-details-page.html',
      chunks: ['styles', 'roomDetailsPage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/registration-page.pug`,
      filename: 'registration-page.html',
      chunks: ['styles', 'registrationPage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/singin-page.pug`,
      filename: 'singin-page.html',
      chunks: ['styles', 'singinPage'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/colors.pug`,
      filename: 'colors.html',
      chunks: ['styles'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/cards.pug`,
      filename: 'cards.html',
      chunks: ['styles', 'cards'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/headers-and-footers.pug`,
      filename: 'headers-and-footers.html',
      chunks: ['styles'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/Form-elements.pug`,
      filename: 'Form-elements.html',
      chunks: ['styles', 'formElements'],
    }),

  ],
};
