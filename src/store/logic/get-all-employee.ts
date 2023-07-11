import { createLogic } from "redux-logic";
import { getEmployees } from "../../api/admin-resource";
import { retreiveAllEmployee } from "../action/action";

const getAllEmployee: any =  createLogic({
    type: 'GET_ALL_EMPLOYEE',
    async process({ action }, dispatch, done) {
        getEmployees()
            .then(function (response) {
                dispatch(retreiveAllEmployee(response.data.data))
                done()
            })
            .catch(function (error) {
                console.log("Error in getting employees : ", error)
                done()
            })
    }
})

export default getAllEmployee