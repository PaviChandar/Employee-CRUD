import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import { decodeTokenValue, removeToken } from "../storage/token"

const Navbar = () => {

    const decodeValue = decodeTokenValue()
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setIsLoggedIn(true)
        }
    },[])
    
    const handleLogout = () => {
        removeToken('token')
        setIsLoggedIn(false)
        navigate('/')
    }
    
    return (
        <div>
            {
                isLoggedIn ?
                <>
                    <h4>Hello, { decodeValue.username }</h4>
                    <Button onClick={handleLogout}>Logout</Button>
                </> :
                <>
                    <Button onClick={() => navigate('/login')} >Login</Button>
                </>
            }
        </div>
    )
}

export default Navbar