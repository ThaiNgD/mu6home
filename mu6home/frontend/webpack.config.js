const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js", // Your React entry file
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js", // output as main.js
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // handle .js and .jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/, // optional css loader
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true, // for React Router
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/**/*.json", to: "[name][ext]" }, // copy all src JSON files
      ],
    }),
  ],
  mode: "development",
};
