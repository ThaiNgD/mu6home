const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx", // Your React entry file
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
            plugins: [
              require.resolve("react-refresh/babel"), // 👈 enable React Fast Refresh
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    open: true,
    hot: true, // Hot reload (modules, if supported)
    liveReload: true, // Auto page reload when files change
    historyApiFallback: true, // for React Router
    watchFiles: ["src/**/*"], // 👈 ensure Webpack watches your files
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/**/*.json", to: "[name][ext]" }, // copy all src JSON files
      ],
    }),
    new ReactRefreshWebpackPlugin(), // 👈 add here
  ],
  mode: "development",
};
