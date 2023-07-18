import { createLogic } from "redux-logic";

import { viewUser } from "../../api/user-resource";
import { getSingleUser } from "../action/action";

const getUser = createLogic({
    type: 'GET_SINGLE_USER',
    process ({ action }: any, dispatch, done) {
        const id = action.payload
        console.log("id in logic : ", id)
        viewUser(id)
            .then(function (response) {
                console.log("res data : ", response.data)
                dispatch(getSingleUser(response.data))
                done()
            })
            .catch(function (error) {
                console.log("Error from get-single user : ", error.response.message)
                done()
            })
    }
})

export default getUser