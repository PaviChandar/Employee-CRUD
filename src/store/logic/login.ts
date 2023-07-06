import { createLogic } from "redux-logic"

import { userLogin } from "../../api/user-resource"
import { isLogin, setMessage, test, userData, userLoggedIn } from "../action/action"
import * as types from "../action/action-type"

const loginUser: any = createLogic({
    type: 'LOGIN',
    process({ action }: any , dispatch, done) {
        const user = action.payload
        console.log("inside logic action : ", user)
        userLogin(user)
            .then((response) => {
                console.log("response from log : ",response.data.data)
                console.log("res msg : ", response.data.message)

                dispatch(test(response.data.message))

                dispatch(userLoggedIn(response.data.data))
                // dispatch(setMessage(response.data.message))
                // dispatch(isLogin(response.data.data.login))

                localStorage.setItem('token', response.data.token)
            })
            .catch((error) => {
                console.log("error : ", error)
                const message = error.response.data.message
                dispatch(setMessage(message))
                console.log("Error from login response : ", message) 
            })
            done()
    }
})

export default loginUser