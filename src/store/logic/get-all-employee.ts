import { createLogic } from "redux-logic";
import { getEmployees } from "../../api/admin-resource";
import { retreiveAllEmployee } from "../action/action";

const getAllEmployee: any =  createLogic({
    type: 'GET_ALL',
    async process({ action }: any, dispatch, done) {
        console.log("action in logic : ", action.type)
        getEmployees()
            .then(function (response) {
                console.log("res data from getall : ", response.data.data)
                dispatch(retreiveAllEmployee(response.data.data))
            })
            .catch(function (error) {
                console.log("Error in getting employees : ", error)
            })
            done()
    }
})

export default getAllEmployee