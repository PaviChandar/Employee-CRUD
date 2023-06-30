import { IUserInput, IUserState, IUserType } from "../../shared/interface/user.interface"
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

const userReducer = (state: IUserState= initialState, action: IUserType) => {
    switch(action.type) {
        case types.LOGIN:
            console.log("inside login red : ", action)
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
