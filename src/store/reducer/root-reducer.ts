import { combineReducers } from "redux";

import userReducer from "./user-reducer";

// import employeeReducer from "./employee-reducer";
// import userReducer from "./user-reducer";

// const rootReducer = combineReducers({
//     employeeData : employeeReducer,
//     userData: userReducer
// })

// export default rootReducer

const rootReducer = combineReducers({
    userData: userReducer
})

export default rootReducer