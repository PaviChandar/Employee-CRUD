import { createLogic } from "redux-logic"

import { userLogin } from "../../api/user-resource"
import { isLogin, userLoggedIn } from "../action/action"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../action/action-type"

const loginUser: any = createLogic({
    type: 'LOGIN_REQUEST',
    process({ action }: any , dispatch, done) {
        const user = action.payload
        userLogin(user)
            .then((response) => {
                localStorage.setItem('token', response.data.token)

                dispatch(userLoggedIn(response.data.data))
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload: response.data.message
                })
                dispatch(isLogin(response.data.data.login))
                done()
            })
            .catch((error) => {
                const message = error.response.data.message 
                dispatch({
                    type:LOGIN_FAILURE,
                    payload: message
                })
                done()
            })
    }
})

export default loginUser