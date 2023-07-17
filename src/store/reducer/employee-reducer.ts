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
    },
    successMessage:'',
    errorMessage:''
}

const employeeReducer = (state:IEmployeeState = initialState, action: IEmployeeType) => {

    switch(action.type) {
        case types.ADD_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                successMessage:action.payload.message,
                errorMessage:null
            }
        case 'ADD_EMPLLOYEE_FAILURE' :
            return {
                ...state,
                employee: action.payload,
                successMessage:null,
                errorMessage:action.payload
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
        case types.GET_ALL:
            return {
                ...state,
                employees: action.payload
            }            
        default:
            return state
    }
}

export default employeeReducer