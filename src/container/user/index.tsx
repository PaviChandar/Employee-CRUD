import { IUserInput } from "../../shared/interface/user.interface"
import { store } from "../../store"
import getAllUsers from "../../store/logic/get-all-users"

export const loginUser = (user: IUserInput) => {
    return ({ type: 'LOGIN_REQUEST', payload: user })
}

export const registerUser = (user: IUserInput) => {
    return ({ type: 'SIGN_UP', payload: user })
}

export const isLogin = (login: boolean) => {
    return ({ type: 'IS_LOGIN', payload: login })
}

export const editUser = (user: IUserInput) => {
    return ({ type: 'EDIT_USER', payload: user })
}

export const viewUser = (id: number) => {
    return ({ type: 'GET_SINGLE_USER', payload: id })
}

export const getAllUser = () => {
    return store.dispatch(getAllUsers)
}