import { IUserInput } from "../../shared/interface/user.interface"
import { store } from "../../store"

export const loginUser = (user: IUserInput) => {
    return ({ type: 'LOGIN', payload: user })
}

export const registerUser = (user: IUserInput) => {
    return ({ type: 'SIGN_UP', payload: user })
}

export const login = (login: boolean) => {
    console.log("login cont : ", login)
    return ({ type: 'IS_LOGIN' })
}