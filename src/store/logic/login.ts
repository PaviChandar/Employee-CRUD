import { createLogic } from "redux-logic"

import { userLogin } from "../../api/user-resource"
import { isLogin, setMessage, userData, userLoggedIn } from "../action/action"
import * as types from "../action/action-type"

const loginUser: any = createLogic({
    type: types.LOGIN_USER,
    async process({ action }: any , dispatch, done) {
        const user = action.payload
        console.log("inside logic action : ", user)
        userLogin(user)
            .then(function (response) {
                console.log("response from log : ",response.data.data)
                dispatch(userData(response.data.data))
                // dispatch(userLoggedIn(response.data.data))
                localStorage.setItem('token', response.data.token)
                dispatch(isLogin(response.data.data.login)) //succ-err -> lifecycle
            })
            .catch(function (error) {
                const message = error.response.data.message
                dispatch({ type: 'SET_MESSAGE', payload: message })
                console.log("Error from login response : ", message) 
            })
            done()
    }
})

export default loginUser