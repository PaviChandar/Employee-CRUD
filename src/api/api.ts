import { EmployeeInput } from "../shared/interface/employee.interface"
import { UserInput } from "../shared/interface/user.interface"
import axiosInstance from "./axios"

export const userLogin = (user: UserInput) => {
    return axiosInstance.post('/login', user)
}

export const userRegister = (user: UserInput) => {
    return axiosInstance.post('/users', user)
}

export const getEmployees = () => {
    return axiosInstance.get('/employees')
}

export const getSingleEmployee = (id: number) => {
    return axiosInstance.get(`/employees/${id}`)
}

export const addNewEmployee = (employee: EmployeeInput) => {
    return axiosInstance.post('/employees', employee)
}

export const editEmployee = (employee: EmployeeInput, id: number) => {
    return axiosInstance.put(`/employees/${id}`, employee)
}

export const excludeEmployee = (id: number) => {
    return axiosInstance.delete(`/employees/${id}`)
}