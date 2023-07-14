import { createLogic } from "redux-logic";
import { userRegister } from "../../api/user-resource";
import { userRegistered } from "../action/action";
import { REGISTER_SUCCESS } from "../action/action-type";

const signUpUser: any = createLogic({
    type:'SIGN_UP',
    async process({ action }: any, dispatch, done) {
        const user = action.payload
        userRegister(user)
            .then(function(response) {
                dispatch(userRegistered(response.data.data))
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data.message
                })
                done()
            })
            .catch(function(error) {
                console.log("Error in signing up : ", error.response.data.message)
                done()
            })
    }
})

export default signUpUser