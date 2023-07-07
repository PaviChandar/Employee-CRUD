import { IUserInput } from "../../shared/interface/user.interface"

export const loginUser = (user: IUserInput) => {
    console.log("inside cont : ", user)
    return ({ type: 'LOGIN_REQUEST', payload: user })
}

export const registerUser = (user: IUserInput) => {
    return ({ type: 'SIGN_UP', payload: user })
}

export const isLogin = (login: boolean) => {
    console.log("login cont : ", login)
    return ({ type: 'IS_LOGIN', payload: login })
}

// export const successMessage = (message: any) => {
//     console.log("inside succ msg cont : ", message)
//     return ({ type:'SET_MESSAGE', payload: message })
// }