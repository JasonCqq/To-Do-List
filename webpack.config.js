/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
// const HtmlWebpackPlugin = require("html-webpack-plugin");

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
