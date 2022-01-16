/** https://webpack.js.org/concepts/ */
/* https://www.npmjs.com/package/html-webpack-plugin */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpack = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: 'index.html'
});

module.exports = {
  mode: 'development',
  entry: './assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..'),
    filename: 'dist/javascript/bundle.js'
  },
  plugins: [htmlWebpack],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    port: 3000
  }
}