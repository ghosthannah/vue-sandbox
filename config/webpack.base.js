const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV;
const devMode = env !== "production";
const sourceMap = env === "development";

module.exports = {
  entry: "./src/main.js",
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
              postcssOptions: {
                plugins: [
                  require("autoprefixer")(),
                  require("cssnano")({ zindex: false })
                ]
              }
            }
          },
          { loader: "sass-loader", options: { sourceMap } },
          {
            loader: "sass-resources-loader",
            options: {
              resources:
                path.resolve(__dirname, "../src/scss/") + "/resources.scss"
            }
          }
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
  devtool: sourceMap ? "cheap-module-eval-source-map" : undefined,
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/assets/"),
          to: path.resolve(__dirname, "../dist/assets/")
        }
      ]
    }),
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
