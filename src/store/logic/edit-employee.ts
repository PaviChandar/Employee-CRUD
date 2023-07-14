import { createLogic } from "redux-logic";

import { editEmployee } from "../../api/admin-resource";
import { upgradeEmployee } from "../action/action";

const updateEmployee = createLogic({
    type: 'EDIT_EMPLOYEE',
    process({ action }:any, dispatch, done) {
        const { id } = action.payload
        const employee = action.payload
        editEmployee(employee,id)
            .then(function (response) {
                dispatch(upgradeEmployee(response.data))
                done()
            })
            .catch(function (error) {
                console.log("error in update logic: ", error)
                done()
            })
    }
})

export default updateEmployee