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
        case 'LOGIN_REQUEST':
            console.log("action in login red : ", action.type)
            console.log("payload in login red : ", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case 'IS_LOGIN':
            console.log("inside is-log reducer : ", action.payload)
            return {
                ...state,
                login: action.payload
            }
        case 'SET_MESSAGE':
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
