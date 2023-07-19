import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { deleteEmployee, getAllEmployees } from "../../container/employee"
import { IEmployee, IEmployeeInput, IEmployeeState } from "../../shared/interface/employee.interface";

interface State {
    employeeData: IEmployee
    state: IEmployeeState & IEmployee
}

const GetAllEmployee = () => {

    const navigate = useNavigate()  
    const dispatch = useDispatch()
    const { t } = useTranslation()

    useEffect(() => {
        getAllEmployees()
    }, [])

    const employees = useSelector((state: any) => state.employeeData.employees)

    const handleDelete = (id: number) => {
        dispatch(deleteEmployee(id))
    }

    return (
        <>
            <div>   
                <h3>Retreiving all emps</h3>
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
            <Button onClick={() => navigate('/admin/create')}>Add Employee</Button>
        </>
    )
}

export default GetAllEmployee