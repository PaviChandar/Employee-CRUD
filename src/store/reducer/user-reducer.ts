import { IUserInput, IUserState, IUserType } from "../../shared/interface/user.interface"
import * as types from "../action/action-type"

const initialState: IUserState| IUserInput = {
    users:[],
    user: {
        email:'',
        password:'',
        username:'',
        login: false,
    },
    message: ''
}

const userReducer = (state: IUserState= initialState, action: IUserType) => {
    console.log("action : ", action);
    
    switch(action.type) {      
        case types.REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        // case 'LOGIN_USER':
        //     console.log("action in login red : ", action.type)
        //     console.log("payload in login red : ", action.payload)
        //     return {
        //         ...state,
        //         user: action.payload
        //     }
        case 'LOGIN_REQUEST':
            console.log("action in login red : ", action.type)
            console.log("payload in login red : ", action.payload)
            console.log("msg in login red : ", action.payload.message)
            return {
                ...state,
                user: action.payload,
                message: action.payload.message
            }
        case types.IS_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case types.SET_MESSAGE:
            console.log("set msg : ", action.payload.message)
            return {
                ...state,
                message: action.payload.message
            }
        default:
            console.log("default state")
            return state
    }
}

export default userReducer
