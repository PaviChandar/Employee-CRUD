import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getAllEmployees } from "../../container/employee";
import { IEmployees } from "../../shared/interface/employee.interface";

const GetAllEmployeeComponent = () => {

    useEffect(() => {
        console.log("inside use-effect")
        getAllEmployees()
    }, [])

    const employee = useSelector((state: any) => state.employeeData.employees)
    console.log("emp from state : ", employee)

    return (
        <>
            <div>
                <h3>Retreiving all emps</h3>
            </div>
        </>
    )
}

export default GetAllEmployeeComponent