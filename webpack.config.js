const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'FabricLayers',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    'fabric': {
      commonjs: 'fabric',
      commonjs2: 'fabric',
      amd: 'fabric',
      root: 'fabric'
    }
  }
};
