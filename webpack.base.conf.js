const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
}

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: ['@babel/polyfill', `${PATHS.src}/index.js`],
    datepicker: ['@babel/polyfill', `${PATHS.src}/blocks/calendar/calendar.js`],
    dropdown: ['@babel/polyfill', `${PATHS.src}/blocks/dropdown/dropdown.js`],
    dropdownComfort: ['@babel/polyfill', `${PATHS.src}/blocks/dropdown/dropdown-comfort.js`],
    checkBox: ['@babel/polyfill', `${PATHS.src}/blocks/check-box_btn/check-box.js`],
    likeBtn: ['@babel/polyfill', `${PATHS.src}/blocks/like-checkbox/like-checkbox.js`],
    pagination: ['@babel/polyfill', `${PATHS.src}/blocks/pagination/pagination.js`],
  },

  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/',
  },

  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname, 'src/blocks'), // easy path
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
        loader: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
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
              config: { path: './postcss.config.js' },
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
              config: { path: './postcss.config.js' },
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
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './postcss.config.js' },
            },
          },
          {
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

  plugins: [

    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/assets/img`, to: `${PATHS.assets}img` },
    ]),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/number-page/number-page.pug`,
      filename: 'number-page.html',
      excludeChunks: ['likeBtn'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/index-page/index-page.pug`,
      filename: 'index.html',
      excludeChunks: ['pagination', 'likeBtn', 'checkBox', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/review-page/review-page.pug`,
      filename: 'review-page.html',
      excludeChunks: ['pagination', 'checkBox', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/register-page/register-page.pug`,
      filename: 'register-page.html',
      excludeChunks: ['pagination', 'likeBtn', 'checkBox', 'dropdown', 'datepicker', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/login-page/login-page.pug`,
      filename: 'login-page.html',
      excludeChunks: ['pagination', 'likeBtn', 'checkBox', 'dropdown', 'datepicker', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/colors.pug`,
      filename: 'colors.html',
      excludeChunks: ['pagination', 'likeBtn', 'checkBox', 'dropdown', 'datepicker', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/cards.pug`,
      filename: 'cards.html',
      excludeChunks: ['pagination', 'likeBtn', 'checkBox', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/headers-and-footers.pug`,
      filename: 'headers-and-footers.html',
      excludeChunks: ['pagination', 'likeBtn', 'checkBox', 'dropdown', 'datepicker', 'dropdownComfort'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/Form-elements.pug`,
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
