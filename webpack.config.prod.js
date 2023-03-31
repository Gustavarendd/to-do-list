const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js", //"[contenthash].js" for dynamic file name
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  devtool: "cheap-source-map",
  plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
