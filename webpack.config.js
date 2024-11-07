const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main entry file
  output: {
    filename: 'bundle.js',  // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve from dist directory
    port: 3000, // Port for dev server
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
