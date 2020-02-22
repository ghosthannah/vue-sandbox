const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const hostname = "localhost";

const devConfig = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    contentBase: false,
    historyApiFallback: false,
    noInfo: true,
    overlay: true,
    disableHostCheck: true,
    host: hostname,
    port: process.env.npm_package_config_port,
    headers: {
      "X-Frame-Options": "SAMEORIGIN"
    },
    proxy: {}
  }
});

module.exports = devConfig;
