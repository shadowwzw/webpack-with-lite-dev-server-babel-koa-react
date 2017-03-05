module.exports = {
  entry: "./src/index",
  output: {
      path: __dirname + "/public",
      filename: "bundle.js",
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              query: {
                  presets: ["es2015", "react"]
              }
          },
          {
              test: /\.css$/,
              loader: "style-loader!css-loader?modules=true",
          }
      ]
  }
};