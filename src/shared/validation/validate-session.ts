import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { localStorageKey } from "../storage/token"

function ValidateSession() {
    const navigate = useNavigate()

    const validateSession = () => {
        const token = localStorageKey('token')
        
        if(!token){
            return true
        }
        return false
    }

    useEffect(() => {
        if(validateSession()) {
            navigate('/')
        }
    },[window.location.pathname])

}

export default ValidateSession