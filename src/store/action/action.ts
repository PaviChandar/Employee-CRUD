import { EmployeeInput } from "../../shared/interface/employee.interface";
import * as types from "../action/action-type"

export const registerEmployee = (employee: EmployeeInput) => ({
    type: types.ADD_EMPLOYEE,
    payload: employee
})

export const upgradeEmployee = (employee: EmployeeInput) => ({
    type: types.UPDATE_EMPLOYEE,
    payload: employee
})

export const removeEmployee = () => ({
    type: types.DELETE_EMPLOYEE
})

export const retreiveAllEmployee = () => ({
    type: types.GET_ALL_EMPLOYEE
})

export const retreiveEmployee = (employee: EmployeeInput) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})