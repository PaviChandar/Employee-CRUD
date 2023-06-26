import { useEffect, useState } from "react"
import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { useSelector } from "react-redux";

import EmployeeContainer from "../../container/employee-container"
import { IEmployees } from "../../shared/interface/employee.interface"

const GetAllEmployee = () => {
    const { getAllEmployees } = EmployeeContainer()

    const [data, setData] = useState<any>()

    useEffect(() => {
        console.log("inside use-effect")
        getAllEmployees()
        setData(data)
    }, [data])

    const employee = useSelector((state: any) => state.employeeData.IEmployees)
    console.log("emp from state : ", employee)

    return (
        <>
            <div>
            <h3>Retreiving all emps</h3>
            {console.log("data : ", data)}
            {
                data && data.map((x: any) => {
                    return (
                        <div>
                            <table>
                                <td>Name : {x.name}</td>
                                <td>Salary : {x.salary}</td>
                            </table>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default GetAllEmployee