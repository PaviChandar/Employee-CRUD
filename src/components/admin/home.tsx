import { useEffect } from "react"
import EmployeeContainer from "../../container/employee-container"

const Admin = () => {
    const { getAllEmployees } = EmployeeContainer()

    useEffect(() => {
        getAllEmployees()
    })

    return (
        <div>
            Admin home
        </div>
    )
}

export default Admin