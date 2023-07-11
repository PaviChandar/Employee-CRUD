import { combineReducers } from "redux"

import employeeReducer from "./employee-reducer"
import userReducer from "./user-reducer"

const rootReducer = combineReducers({
    userData: userReducer,
    employeeData: employeeReducer
})

export default rootReducer