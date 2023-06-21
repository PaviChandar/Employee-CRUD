import { combineReducers } from "redux";
import { employeeReducer } from "./employee-reducer";
import { userReducer } from "./user-reducer";

const rootReducer = combineReducers({
    employeeReducer : employeeReducer,
    userReducer: userReducer
})

export default rootReducer