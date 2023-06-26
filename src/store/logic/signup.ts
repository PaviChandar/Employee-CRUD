import { createLogic } from "redux-logic";
import { userRegister } from "../../api/user-resource";
import { userRegistered } from "../action/action";

const signUpUser: any = createLogic({
    type:'SIGN_UP',
    async process({ action }: any, dispatch, done) {
        const user = action.payload
        userRegister(user)
            .then(function(response) {
                dispatch(userRegistered(response.data.data))
                done()
            })
            .catch(function(error) {
                console.log("Error in signing up : ", error.response)
                done()
            })
    }
})

export default signUpUser