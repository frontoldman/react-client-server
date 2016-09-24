/**
 * Created by zhangran on 16/9/22.
 */

import Koa from 'koa'

import handleRender from './handleRender'

var app = Koa()

app.use(handleRender)


app.listen(8889, error => {
  if(error){
    console.log(error)
    return
  }

  console.log('server start on http://localhost:8889')
})