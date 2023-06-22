import { useDispatch } from "react-redux"

const EmployeeContainer = () => {
   const dispatch = useDispatch()

   const getAllEmployees = () => {
       dispatch({ type: 'GET_ALL' })
   }

   return {
       getAllEmployees
   }
}

export default EmployeeContainer