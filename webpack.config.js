const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',

  entry: './src/main.js',

  output: {
    path      : path.resolve(__dirname, 'dist'),
    filename  : 'bundle.js',
  },

  resolve: {
    modules: [
      path.resolve(".", "src"),
      "node_modules"
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },


      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new VueLoaderPlugin()
  ]
};

