import axios from "axios";
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogicMiddleware } from "redux-logic";
import thunk from "redux-thunk";

import rootReducer from "./reducer/root-reducer";

let rootLogic
const deps = {
    httpClient: axios
}

const logicMiddleware = createLogicMiddleware(rootLogic, deps)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logicMiddleware)))