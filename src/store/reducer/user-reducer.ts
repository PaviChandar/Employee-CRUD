import { UserInput, UserState, UserType } from "../../shared/interface/user.interface"
import * as types from "../action/action-type"

const initialState: UserState| UserInput = {
    users:[],
    user: {
        email:'',
        password:'',
        username:''
    },
    login: false
}

export const userReducer = (state: UserState= initialState, action: UserType) => {
    switch(action.type) {
        case types.LOGIN_USER:
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
