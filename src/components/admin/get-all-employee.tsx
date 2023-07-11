import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { getAllEmployees } from "../../container/employee"
import { IEmployee, IEmployeeInput, IEmployeeState } from "../../shared/interface/employee.interface";

interface State {
    employeeData: IEmployee;
    state: IEmployeeState & IEmployee
}

const GetAllEmployee = () => {

    const navigate = useNavigate()

    useEffect(() => {
        getAllEmployees()
    }, [])

    const employees = useSelector((state: any) => state.employeeData.employees)

    return (
        <>
            <div>   
                <h3>Retreiving all emps</h3>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Salary</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                employees && employees.map((employee: IEmployeeInput) => (
                                    <TableRow key={employee.id}>
                                        <TableCell>{employee.id}</TableCell>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.age}</TableCell>
                                        <TableCell>{employee.city}</TableCell>
                                        <TableCell>{employee.salary}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Button onClick={() => navigate('/admin/create')} >Add Employee</Button>
        </>
    )
}

export default GetAllEmployee