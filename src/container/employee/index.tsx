import { store } from "../../store"
import getAllEmployee from "../../store/logic/get-all-employee"

export const getAllEmployees = () => {
    return store.dispatch(getAllEmployee)
}