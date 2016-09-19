import {combileReducers} from "redux";
import {routerReducer} from "react-router-redux";
import calc from "./calc";

const rootReducer = combileReducers({
  calc,
  routerReducer
})

export default rootReducer
