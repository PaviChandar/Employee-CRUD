import { ConnectingAirportsOutlined } from "@mui/icons-material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ValidateSession() {
    const navigate = useNavigate()

    const validateSession = () => {
        const token = localStorage.getItem('token')
        console.log("token : ", token);
        
        if(!token){
            return true
        }
        return false
    }

    useEffect(() => {
        if(validateSession()) {
            console.log('navigate to log')
            navigate('/login')
        }
    },[window.location.pathname])

}

export default ValidateSession