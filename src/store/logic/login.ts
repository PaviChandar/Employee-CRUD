import { createLogic } from "redux-logic"

import { userLogin } from "../../api/user-resource"
import { isLogin, setMessage, userLoggedIn } from "../action/action"
import * as types from "../action/action-type"

const loginUser: any = createLogic({
    type: 'LOGIN_REQUEST',
    process({ action }: any , dispatch, done) {
        const user = action.payload
        userLogin(user)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                // dispatch({
                //     type: 'LOGIN_USER',
                //     payload: user
                // })

                dispatch(setMessage(response.data.message))
                dispatch(isLogin(response.data.data.login))
            })
            .catch((error) => {
                const message = error.response.data.message
                console.log("Error from login response : ", message) 
                return message
            })
            done()
    }
})

export default loginUser