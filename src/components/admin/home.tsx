import { useEffect } from "react"
import EmployeeContainer from "../../container/employee-container"
import GetAllEmployee from "./get-all-employee"

const Admin = () => {

    return (
        <div>
            <h1>Admin home</h1>
            <GetAllEmployee />
        </div>
    )
}

export default Admin