/**
 * Created by zhangran on 16/9/22.
 */
import React from "react";
import {renderToString} from "react-dom/server";
import {match} from "react-router";


import configureStore from "../../client/redux/store";
import routes from "../../client/routes";
import Html from './Html'

const handleRender = ctx => {

  const initialState = {}
  const store = configureStore(initialState)

  const _ctx = ctx
  const {url: location} = _ctx

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) {
      _ctx.status = 500
      _ctx.body = error.message
    } else if(renderProps){
      const component = (
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      )

      _ctx.type = 'html'
      _ctx.status = 200
      _ctx.body = renderToString(<Html component={component} store={store} />)
    }

  })

}

export default handleRender