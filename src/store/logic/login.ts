import { createLogic } from "redux-logic"
import { userLogin } from "../../api/api"
import { isLogin, userLoggedIn } from "../action/action"

const loginUser: any = createLogic({
    type: 'LOGIN',
    async process({ action }: any , dispatch, done) {
        const user = action.payload
        userLogin(user)
            .then(function (response) {
                console.log("res from log : ", response.data.data)
                dispatch(userLoggedIn(response.data.data))
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('login', response.data.data.login)
                dispatch(isLogin())
                // done()
            })
            .catch(function (error) {
                console.log("Error from login response : ", error)
                alert("Incorrect credentials")
                // done()
            })
            done()
    }
})

export default loginUser