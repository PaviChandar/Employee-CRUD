import { IUserInput, IUserState, IUserType } from "../../shared/interface/user.interface"
import * as types from "../action/action-type"

const initialState: IUserState| IUserInput = {
    users:[],
    user: {
        email:'',
        password:'',
        username:'',
        login: false,
        // message: ''
    },
    message: ''
}

const userReducer = (state: IUserState= initialState, action: IUserType) => {
    console.log("action : ", action);
    
    switch(action.type) {
        case types.LOGIN_USER:
            console.log("type : ", action.type)
            console.log("payload : ", action.payload)
            return {
                ...state,
                user: action.payload,
                login: action.payload.login
            }
        // case 'USER':
        //     console.log("action payload: ",action.payload);
        //     console.log("type : ", action.type)
        //     return {
        //         ...state,
        //         user: action.payload
        //     }        
        case types.REGISTER_USER:
            console.log("inside reg reducer", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case types.IS_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case types.SET_MESSAGE:
            console.log("set msg : ", action)
            return {
                ...state,
                message: action.payload.message
            }
        case 'TEST': 
        console.log("test reducer : ", action.payload)
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
