import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { deleteEmployee, getAllEmployees } from "../../container/employee"
import { IEmployee, IEmployeeInput, IEmployees, IEmployeeState } from "../../shared/interface/employee.interface";

interface State {
    employeeData: IEmployee
    state: IEmployeeState & IEmployee
}

const GetAllEmployee = () => {

    const navigate = useNavigate()  
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        getAllEmployees()
    }, [])

    const employees = useSelector((state: IEmployees) => state.employeeData.employees)

    const handleDelete = (id: number) => {
        dispatch(deleteEmployee(id))
        if(window.confirm("Are you sure to delete employee?")) {
            setSuccess(true)
        }
    }

    useEffect(() => {
        if(success) {
            alert("Employee deleted successfully!")
        }
    })

    return (
        <>
            <div>   
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
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
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.age}</TableCell>
                                        <TableCell>{employee.city}</TableCell>
                                        <TableCell>{employee.salary}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => navigate(`/admin/edit/${employee.id}`)}>{t("update_button")}</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleDelete(employee.id)}>{t("delete_button")}</Button>
                                        </TableCell>
                                    </TableRow>                                    
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Button sx={{ marginLeft:"700px", marginTop:"20px" }}
                onClick={() => navigate('/admin/create')}>Add Employee</Button>
        </>
    )
}

export default GetAllEmployee