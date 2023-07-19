import { createLogic } from "redux-logic";
import { getEmployees } from "../../api/admin-resource";
import { getUsers } from "../../api/user-resource";
import { retreiveAllEmployee, retreiveAllUser } from "../action/action";

const getAllUsers: any =  createLogic({
    type: 'GET_ALL_USER',
    async process({ action }, dispatch, done) {
        getUsers()
            .then(function (response) {
                console.log("data from all users : ", response.data.data)
                dispatch(retreiveAllUser(response.data.data))
                done()
            })
            .catch(function (error) {
                console.log("Error in getting employees : ", error)
                done()
            })
    }
})

export default getAllUsers