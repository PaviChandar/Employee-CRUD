import { combineReducers } from "redux";
import { employeeReducer } from "./employee-reducer";

const rootReducer = combineReducers({
    employeeReducer : employeeReducer
})

export default rootReducer