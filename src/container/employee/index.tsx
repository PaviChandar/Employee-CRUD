import { store } from "../../store"
import getAllEmployee from "../../store/logic/get-all-employee"

export const getAllEmployees = () => {
    console.log("inside getall emp cont index")
    return store.dispatch(getAllEmployee)
}