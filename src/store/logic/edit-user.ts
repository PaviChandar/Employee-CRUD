import { createLogic } from "redux-logic";

import { userUpdate } from "../../api/user-resource";
import { upgradeUser } from "../action/action";

const updateUser = createLogic({
    type: 'EDIT_USER',
    process({ action }:any, dispatch, done) {
        const { id } = action.payload
        const user = action.payload
        userUpdate(user,id)
            .then(function (response) {
                dispatch(upgradeUser(response.data))
                done()
            })
            .catch(function (error) {
                console.log("error in update logic: ", error)
                done()
            })
    }
})

export default updateUser