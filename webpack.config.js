const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const esLintPlugin = (isDev) =>
  isDev ? [] : [new ESLintPlugin({ extensions: 'js' })];

module.exports = ({ dev }) => ({
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-source-map' : false,
  entry: {
    app: './src/index.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
    assetModuleFilename: 'images/[hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: !dev ? 'Shape App' : 'Development',
      // template: path.resolve(__dirname, './src/template.html'), // шаблон
      // filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ...esLintPlugin(dev),
  ],
});
