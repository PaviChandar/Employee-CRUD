import { createLogic } from "redux-logic";

import { getSingleEmployee } from "../../api/admin-resource";
import { retreiveEmployee } from "../action/action";

const getEmployee = createLogic({
    type: 'GET_SINGLE_EMPLOYEE',
    process ({ action }: any, dispatch, done) {
        const id = action.payload
        getSingleEmployee(id)
            .then(function (response) {
                dispatch(retreiveEmployee(response.data))
                done()
            })
            .catch(function (error) {
                console.log("Error from get-single employee : ", error)
                done()
            })
    }
})

export default getEmployee