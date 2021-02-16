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
    app: ['@babel/polyfill', `${PATHS.src}/index.js`],
    header: [`${PATHS.src}/blocks/header/header.js`],
    footer: [`${PATHS.src}/blocks/footer/footer.js`],
    datepicker: [`${PATHS.src}/blocks/calendar/datepicker.js`],
    dropdown: [`${PATHS.src}/blocks/dropdown/dropdown.js`],
    checkBox: [`${PATHS.src}/blocks/check-box_btn/check-box.js`],
    likeBtn: [`${PATHS.src}/blocks/like-checkbox/like-checkbox.js`],
    pagination: [`${PATHS.src}/blocks/pagination/pagination.js`],
    chart: [`${PATHS.src}/blocks/chart/chart.js`],
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
      template: `${PATHS.src}/pages/index-page/index-page.pug`,
      filename: 'index-page.html',
      chunks: ['app', 'header', 'footer', 'datepicker', 'dropdown'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/number-page/number-page.pug`,
      filename: 'number-page.html',
      chunks: ['app', 'header', 'footer', 'datepicker', 'dropdown', 'checkBox', 'pagination'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/review-page/review-page.pug`,
      filename: 'review-page.html',
      // excludeChunks: ['pagination', 'checkBox', 'dropdownComfort'],
      chunks: ['app', 'header', 'footer', 'datepicker', 'dropdown', 'chart'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/register-page/register-page.pug`,
      filename: 'register-page.html',
      chunks: ['app', 'header', 'footer'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/login-page/login-page.pug`,
      filename: 'login-page.html',
      chunks: ['app', 'header', 'footer'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/colors.pug`,
      filename: 'colors.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/cards.pug`,
      filename: 'cards.html',
      chunks: ['app', 'datepicker', 'dropdown'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/headers-and-footers.pug`,
      filename: 'headers-and-footers.html',
      chunks: ['app', 'header', 'footer'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/ui-kit/Form-elements.pug`,
      filename: 'Form-elements.html',
      chunks: ['app', 'datepicker', 'dropdown', 'checkBox', 'likeBtn', 'pagination'],
    }),

  ],
};
