import { IEmployeeState, IEmployeeType } from "../../shared/interface/employee.interface"
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

export const employeeReducer = (state:IEmployeeState = initialState, action: IEmployeeType): IEmployeeState => {
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
            console.log("inside getall red", action.payload)
            console.log("inside getall  red data", action.employeeData)
            return {
                ...state,
                employees: action.payload
            }            
        default:
            return state
    }
}