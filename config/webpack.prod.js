const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./webpack.base");

const prodConfig = merge(baseConfig, {
  output: {
    filename: "build.js"
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production"
      }
    }),
    new UglifyPlugin({
      uglifyOptions: {
        sourceMap: true,
        compress: {
          warnings: false
        }
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});

module.exports = prodConfig;
