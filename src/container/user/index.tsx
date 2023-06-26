import { IUserInput } from "../../shared/interface/user.interface"

export const loginUser = (user: IUserInput) => {
    return ({ type: 'LOGIN', payload: user })
}

export const registerUser = (user: IUserInput) => {
    return ({ type: 'SIGN_UP', payload: user })
}