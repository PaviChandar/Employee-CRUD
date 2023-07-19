import registerNewEmployee from "./add-employee";
import removeEmployees from "./delete-employee";
import updateEmployee from "./edit-employee";
import updateUser from "./edit-user";
import getAllEmployee from "./get-all-employee";
import getAllUsers from "./get-all-users";
import getEmployee from "./get-employee";
import loginUser from "./login";
import signUpUser from "./signup";
import getUser from "./view-user";

export default [
    loginUser,
    signUpUser,
    getAllEmployee,
    getEmployee,
    registerNewEmployee,
    updateEmployee,
    removeEmployees,
    updateUser,
    getUser,
    getAllUsers
]