import { IUserInput } from "../../shared/interface/user.interface"

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
    return ({ type: 'EDIT_USER', payload: user})
}