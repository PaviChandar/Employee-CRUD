import { createLogic } from "redux-logic"

import { userLogin } from "../../api/user-resource"
import { isLogin, userLoggedIn } from "../action/action"

const loginUser: any = createLogic({
    type: 'LOGIN',
    async process({ action }: any , dispatch, done) {
        const user = action.payload
        userLogin(user)
            .then(function (response) {
                dispatch(userLoggedIn(response.data.data))
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('login', response.data.data.login)
                dispatch(isLogin(response.data.data.login))
            })
            .catch(function (error) {
                console.log("Error from login response : ", error)
                alert("Incorrect credentials")
            })
            done()
    }
})

export default loginUser