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

//redirect to logic method
export const userLoggedIn = (user: IUserInput) =>  {
    console.log("inside action in userloggedin : ", user)
    return ({
    type: types.LOGIN_USER,
    payload: user
})}

//redirect to reducer
export const userData = (user: any) => ({
        type: 'USER',
        payload: user
});

export const userRegistered = (user: IUserInput) => ({
    type: types.REGISTER_USER,
    payload: user
})

export const isLogin = (login: any) => ({
    type: types.IS_LOGIN,
    payload: login
})

export const setMessage = (message: string) => ({
    type: types.SET_MESSAGE,
    payload: message
})

export const clearMessage = () => ({
    type: types.CLEAR_MESSAGE
})