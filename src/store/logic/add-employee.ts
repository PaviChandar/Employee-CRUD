import { createLogic } from "redux-logic";
import { addNewEmployee } from "../../api/admin-resource";
import { registerEmployee } from "../action/action";

const registerNewEmployee: any =  createLogic({
    type: 'REGISTER_EMPLOYEE',
    async process({ action }: any, dispatch, done) {
        const employee = action.payload
        console.log("employee in add logic : ", employee)
        addNewEmployee(employee)
            .then(function (response) {
                console.log("res data from getall : ", response.data)
                dispatch(registerEmployee(response.data))
            })
            .catch(function (error) {
                console.log("Error in getting employees : ", error)
            })
            done()
    }
})

export default registerNewEmployee