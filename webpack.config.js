/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/main.js",
  module: ["./src/index.js", "./src/get.js"],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

// const path = require("path");

// module.exports = {
//   entry: {
//     index: "./src/index.js",
//     main: "./src/main.js",
//     get: "./src/get.js",
//   },

//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Output Management",
//     }),
//   ],
// };
