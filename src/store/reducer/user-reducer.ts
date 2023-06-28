import { IUserInput, IUserState, IUser } from "../../shared/interface/user.interface"
import * as types from "../action/action-type"

const initialState: IUserState| IUserInput = {
    users:[],
    user: {
        email:'',
        password:'',
        username:''
    },
    login: false
}

const userReducer = (state: IUserState= initialState, action: IUser) => {
    console.log("inside user reducer", action)
    switch(action.type) {
        case types.LOGIN:
            console.log("prev state in red : ", {...state})
            console.log("payload in red : ", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case types.REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        case types.IS_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}

export default userReducer