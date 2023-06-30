import { combineReducers } from "redux";

import employeeReducer from "./employee-reducer";
import userReducer from "./user-reducer";

const rootReducer = combineReducers({
    employeeData : employeeReducer,
    userData: userReducer
})

export default rootReducer