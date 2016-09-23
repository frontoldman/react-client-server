/**
 * Created by zhangran on 16/9/22.
 */
import path from "path";
import WebpackIsomorphicTools from "webpack-isomorphic-tools";


var basePath = path.join(__dirname, '../../')


global.webpackIsomorphicTools = new WebpackIsomorphicTools({
  assets: {}
})
  .development()
  .server(basePath, () => {
  console.log(11)
    require('./server')
  })