import koa from "koa";
import render from "koa-ejs";
import webpack from "webpack";
import path from "path";
import koaWebpackDevMiddleware from "koa-webpack-dev-middleware";
import koaWebpackHotMiddleware from "koa-webpack-hot-middleware";
import webpackClientConfig from "./client.config.js";
import webpackServerConfig from "./server.config.js";

var app = koa()
var compile = webpack(webpackClientConfig)

app.use(koaWebpackDevMiddleware(compile, {
  ...webpackServerConfig,
  publicPath: webpackClientConfig.output.publicPath
}))
app.use(koaWebpackHotMiddleware(compile))

render(app, {
  root: path.join(__dirname, '../../client'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(function *(next) {
  yield this.render('index');
})

app.listen(8888, error => {
  if (error) {
    console.log(error)
    return;
  }
  console.log('listening on 8888');
})


