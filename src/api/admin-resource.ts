import axiosInstance from "."
import { IEmployeeInput } from "../shared/interface/employee.interface"

export const getEmployees = () => {
    return axiosInstance.get('/employees')
}

export const getSingleEmployee = (id: number) => {
    return axiosInstance.get(`/employees/${id}`)
}

export const addNewEmployee = (employee: IEmployeeInput) => {
    return axiosInstance.post('/employees', employee)
}

export const editEmployee = (employee: IEmployeeInput, id: number) => {
    return axiosInstance.put(`/employees/${id}`, employee)
}

export const excludeEmployee = (id: any) => {
    return axiosInstance.delete(`/employees/${id}`, id)
}