import {creatStore, compose} from "redux";
import rootReducer from "../reducers";

const configureStoreProd = (initialState = {}) => {
  const finalCreateStore = compose()(creatStore)

  return finalCreateStore(rootReducer, initialState)
}

export default configureStoreProd