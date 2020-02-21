const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const fs = require("fs");
const env = process.env.NODE_ENV;
const devMode = env !== "production";
const sourceMap = env === "development";

module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  mode: env,
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          devMode ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap } },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "config/"
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap } },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")(),
                require("cssnano")({ zindex: false })
              ]
            }
          },
          { loader: "sass-loader", options: { sourceMap } }
          //,
          //   {
          //       loader: "sass-resources-loader",
          //       options: {
          //           resources: "../src/scss/resources.scss"
          //       }
          //   }
        ]
      },
      {
        test: /\js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|jpg|gif|svg|)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devtool: sourceMap ? "#eval-source-map" : undefined,
  devServer: sourceMap
    ? {
        contentBase: false,
        historyApiFallback: false,
        noInfo: true,
        overlay: true,
        disableHostCheck: true,
        host: "localhost",
        port: process.env.npm_package_config_port,
        headers: {
          "X-Frame-Options": "SAMEORIGIN"
        },
        proxy: {}
      }
    : {},
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        isDevMode: devMode
      }
    })
  ]
};
