const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const hostname = "localhost";

const devConfig = merge(baseConfig, {
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: false,
    host: hostname,
    port: process.env.npm_package_config_port,
    headers: {
      "X-Frame-Options": "SAMEORIGIN"
    },
    proxy: {}
  }
});

module.exports = devConfig;
