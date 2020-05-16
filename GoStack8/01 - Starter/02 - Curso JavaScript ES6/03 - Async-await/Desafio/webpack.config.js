module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: __dirname + "/public",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
