const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const Dotenv = require("dotenv-webpack")

const path = require("path")
const url = require("url")

const publicPath = "/build/"

module.exports = (options = {}) => ({
  entry: "./src/main.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: options.dev ? "[name].js" : "[name].js?[hash]",
    publicPath: options.dev ? "/assets/" : publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|otf|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 64,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".vue", ".json", ".css"],
  },
  devServer: {
    noInfo: true,
    overlay: true,
    compress: true,
    historyApiFallback: {
      index: url.parse(options.dev ? "/assets/" : publicPath).pathname,
    },
    contentBase: path.resolve("./src/assets"),
    watchContentBase: true,
  },
  optimization: {
    minimize: true,
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
})
