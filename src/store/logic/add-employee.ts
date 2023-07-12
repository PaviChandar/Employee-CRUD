import { createLogic } from "redux-logic";

import { addNewEmployee } from "../../api/admin-resource";
import { registerEmployee } from "../action/action";

const registerNewEmployee: any =  createLogic({
    type: 'REGISTER_EMPLOYEE',
    async process({ action }: any, dispatch, done) {
        const employee = action.payload
        addNewEmployee(employee)
            .then(function (response) {
                dispatch(registerEmployee(response.data))
                done()
            })
            .catch(function (error) {
                console.log("Error in adding employees : ", Object.values(error.response.data.message[0]))
                dispatch({
                    type: 'ADD_EMPLOYEE_FAILURE',
                    payload: error.response.data.message[0]
                })
                done()
            })
    }
})

export default registerNewEmployee