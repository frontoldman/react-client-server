import {createStore, compose} from "redux";
import rootReducer from "../reducers";

const configureStoreProd = (initialState = {}) => {
  const finalCreateStore = compose()(createStore)

  return finalCreateStore(rootReducer, initialState)
}

export default configureStoreProd