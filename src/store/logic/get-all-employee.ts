import { createLogic } from "redux-logic";
import { getEmployees } from "../../api/admin-resource";
import { retreiveAllEmployee } from "../action/action";

const getAllEmployee =  createLogic({
    type: 'GET_ALL',
    async process({ action }: any, dispatch, done) {
        getEmployees()
            .then(function (response) {
                console.log("res data from getall : ", response.data.data)
                dispatch(retreiveAllEmployee())
            })
            .catch(function (error) {
                console.log("Error in getting employees : ", error)
            })
            done()
    }
})

export default getAllEmployee