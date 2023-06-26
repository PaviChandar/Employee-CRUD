import { IEmployeeInput } from "../../shared/interface/employee.interface";
import { IUserInput } from "../../shared/interface/user.interface";
import * as types from "../action/action-type"

export const registerEmployee = (employee: IEmployeeInput) => ({
    type: types.ADD_EMPLOYEE,
    payload: employee
})

export const upgradeEmployee = (employee: IEmployeeInput) => ({
    type: types.UPDATE_EMPLOYEE,
    payload: employee
})

export const removeEmployee = () => ({
    type: types.DELETE_EMPLOYEE
})

export const retreiveAllEmployee = () => ({
    type: types.GET_ALL_EMPLOYEE
})

export const retreiveEmployee = (employee: IEmployeeInput) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})

export const userLoggedIn = (user: IUserInput) => ({
    type: types.LOGIN_USER,
    payload: user
})

export const userRegistered = (user: IUserInput) => ({
    type: types.REGISTER_USER,
    payload: user
})

export const isLogin = () => ({
    type: types.IS_LOGIN
})