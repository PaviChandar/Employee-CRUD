import { createLogic } from "redux-logic"
import { userLogin } from "../../api/api"
import { isLogin, userLoggedIn } from "../action/action"

const loginUser: any = createLogic({
    type: 'LOGIN',
    async process({ action }: any, dispatch, done) {
        console.log("action of login : ", action)
        const user = action.payload
        console.log("payload in logic : ", user)
        userLogin(user)
            .then(function (response) {
                console.log("res from log api : ",response.data.data )
                dispatch(userLoggedIn(response.data.data))
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('login', response.data.data.login)
                dispatch(isLogin())
            })
            .catch(function (error) {
                console.log("Error from login response : ", error)
            })
    }
})

export default loginUser