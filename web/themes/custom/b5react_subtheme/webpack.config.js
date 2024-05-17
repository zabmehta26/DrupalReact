const path = require("path");

const config = {
  entry: {
    main: ["./js/src/index.js"],
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "js/dist"),
    filename: "[name].min.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "js/src"),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
