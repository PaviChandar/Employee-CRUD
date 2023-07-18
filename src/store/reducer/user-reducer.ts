import { IUserInput, IUserState, IUserType } from "../../shared/interface/user.interface"
import { IS_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_USER, UPDATE_USER, VIEW_USER } from "../action/action-type";

const initialState: IUserState| IUserInput = {
    users:[],
    user: {
        id:0,
        email:'',
        password:'',
        username:'',
        login: null,
    },
    successMessage: '',
    errorMessage: '',
}

const userReducer = (state: IUserState= initialState, action: IUserType) => {
    
    switch(action.type) {     
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case VIEW_USER:
            console.log("payload in red : ", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                successMessage: action.payload.message,
                errorMessage: null
            }
        case IS_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                successMessage: action.payload,
                errorMessage: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                successMessage:null ,
                errorMessage: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                successMessage: action.payload
            }
        default:
            return state
    }
}

export default userReducer
