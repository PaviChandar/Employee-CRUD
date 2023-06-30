import { createLogic } from "redux-logic";

import { getSingleEmployee } from "../../api/admin-resource";
import { retreiveEmployee } from "../action/action";

const getEmployee = createLogic({
    type: 'GET_SINGLE_EMPLOYEE',
    async process ({ action }: any, dispatch, done) {
        const id = action.payload
        console.log("id in get-single : ", id)
        getSingleEmployee(id)
            .then(function (response) {
                dispatch(retreiveEmployee(response.data))
            })
            .catch(function (error) {
                console.log("Error from get-single employee : ", error)
            })
    }
})

export default getEmployee