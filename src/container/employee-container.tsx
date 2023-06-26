import { useDispatch } from "react-redux"

const EmployeeContainer = () => {
   const dispatch = useDispatch()

   const getAllEmployees = () => {
    console.log("inside getall cont")
       dispatch({ type: 'GET_ALL' })
   }

   return {
       getAllEmployees
   }
}

export default EmployeeContainer