import { EmployeeType } from "../../shared/interface/employee.interface"
import * as types from "../action/action-type"

const initialState = {
    employees: [],
    employee: {
        id: 0,
        name: '',
        age: 0,
        city: '',
        salary: 0
    }
}

export const employeeReducer = (state = initialState, action: EmployeeType) => {
    switch(action.type) {
        case types.ADD_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case types.UPDATE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case types.DELETE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case types.GET_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case types.GET_ALL_EMPLOYEE:
            return {
                ...state,
                employees: action.payload
            }
        default:
            return state
    }
}