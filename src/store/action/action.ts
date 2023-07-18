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

export const retreiveAllEmployee = (employee: IEmployeeInput) => ({
    type: types.GET_ALL,
    payload: employee
})

export const retreiveEmployee = (employee: IEmployeeInput) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})

export const userLoggedIn = (user: IUserInput) =>  ({
    type: 'LOGIN',
    payload: user
})


export const userRegistered = (user: IUserInput) => ({
    type: types.REGISTER_USER,
    payload: user
})

export const isLogin = (login: IUserInput) =>  ({
    type: 'IS_LOGIN',
    payload: login
})

export const upgradeUser = (user: IUserInput) => ({
    type: types.UPDATE_USER,
    payload: user
})

export const getSingleUser = (user: IUserInput) => ({
    type: types.VIEW_USER,
    payload: user
})