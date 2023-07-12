import { createLogic } from "redux-logic";

import { excludeEmployee } from "../../api/admin-resource";
import { removeEmployee } from "../action/action";

const removeEmployees: any = createLogic({
    type: 'REMOVE_EMPLOYEE',
    async process({ action }: any, dispatch, done) {
        const id = action.payload
        console.log("id in delete : ", id)
        excludeEmployee(id)
            .then(function (response) {
                console.log("del res : ", response)
                dispatch(removeEmployee())
                // done()
            })
            .catch(function (error) {
                console.log("error in deleting employee : ", error)
                // done()
                return error
            })
    }
})

export default removeEmployees