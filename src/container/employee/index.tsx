import { IEmployeeInput } from "../../shared/interface/employee.interface"
import { store } from "../../store"
import getAllEmployee from "../../store/logic/get-all-employee"

export const getAllEmployees = () => {
    return store.dispatch(getAllEmployee)
}

export const getSingleEmployee = (id: number) => {
    return ({ type:'GET_SINGLE_EMPLOYEE', payload: id })
}

export const addEmployee = (employee: IEmployeeInput) => {
    return ({ type: 'REGISTER_EMPLOYEE', payload: employee })
}

export const deleteEmployee = (id: number) => {
    return ({ type:'REMOVE_EMPLOYEE', payload: id })
}

export const updateEmployee = (employee: IEmployeeInput) => {
    return  ({ type: 'EDIT_EMPLOYEE', payload: employee })
}