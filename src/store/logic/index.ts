import registerNewEmployee from "./add-employee";
import removeEmployees from "./delete-employee";
import updateEmployee from "./edit-employee";
import getAllEmployee from "./get-all-employee";
import getEmployee from "./get-employee";
import loginUser from "./login";
import signUpUser from "./signup";

export default [
    loginUser,
    signUpUser,
    getAllEmployee,
    getEmployee,
    registerNewEmployee,
    updateEmployee,
    removeEmployees
]