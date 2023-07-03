import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { getAllEmployees } from "../../container/employee";
import { IEmployees } from "../../shared/interface/employee.interface";

const GetAllEmployeeComponent = () => {

    const navigate = useNavigate()

    useEffect(() => {
        console.log("inside use-effect")
        getAllEmployees()
    }, [])

    const employees = useSelector((state: any) => state.employeeData.employees)
    console.log("emp from state : ", employees)

    return (
        <>
            <div>
                <h3>Retreiving all emps</h3>
                {
                    employees && employees.map((employee: any) => {
                        return (
                            <div>
                                <table>
                                    <td>Name: {employee.name}</td>
                                    <td>Age: {employee.age}</td>
                                    <td>Salary: {employee.salary}</td>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
            <Button onClick={() => navigate('/admin/create')} >Add Employee</Button>
        </>
    )
}

export default GetAllEmployeeComponent