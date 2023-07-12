import { IEmployeeInput } from "../../shared/interface/employee.interface"
import { store } from "../../store"
import getAllEmployee from "../../store/logic/get-all-employee"

export const getAllEmployees = () => {
    return store.dispatch(getAllEmployee)
}

export const addEmployee = (employee: IEmployeeInput) => {
    return ({ type: 'REGISTER_EMPLOYEE', payload: employee })
}

export const deleteEmployee = (id: number) => {
    console.log("inside del cont : ", id)
    return ({ type:'REMOVE_EMPLOYEE', payload: id })
}