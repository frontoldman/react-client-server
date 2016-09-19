import path from "path";
import webpack from "webpack";

const config = {
  // 项目根目录
  context: path.join(__dirname, '../../'),
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-hot-middleware/client?reload=true&path=http://localhost:8888/__webpack_hmr`,
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/build/',
    chunkFilename: '[name]-[chunkhash:8].js'
  },
  module: {
    loaders: [
      {
        test : /\.js$/,
        loader: 'babel',
        exclude : [/node_modules/]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default config