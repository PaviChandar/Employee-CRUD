import { createLogic } from "redux-logic"

import { userLogin } from "../../api/user-resource"
import { setMessage, userLoggedIn } from "../action/action"
import * as types from "../action/action-type"

const loginUser: any = createLogic({
    type: 'LOGIN_REQUEST',
    process({ action }: any , dispatch, done) {
        console.log("action in logic : ", action)
        console.log("action type in logic : ", action.type)
        const user = action.payload
        console.log("inside logic action : ", user)
        userLogin(user)
            .then((response) => {
                console.log("response from log : ",response.data.data)
                console.log("response msg from log : ",response.data.message)
                localStorage.setItem('token', response.data.token)
                // dispatch({
                //     type: 'LOGIN_USER',
                //     payload: user
                // })
                dispatch({
                    type: types.SET_MESSAGE,
                    payload: response.data.message
                })
            })
            .catch((error) => {
                const message = error.response.data.message
                console.log("Error from login response : ", message) 
            })
            done()
    }
})

export default loginUser