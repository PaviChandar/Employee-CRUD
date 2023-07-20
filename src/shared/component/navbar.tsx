import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import { decodeTokenValue, localStorageKey, removeToken } from "../storage/token"
import "../../assets/navbar.scss"

const Navbar = () => {

    const decodeValue = decodeTokenValue()
    
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(localStorageKey("token")) {
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
                    <h4 className="username" >Hello, { decodeValue.username }</h4>
                    <button onClick={handleLogout} className="logout" >Logout</button>
                </> :
                <>
                    <Button onClick={() => navigate('/login')} >Login</Button>
                </>
            }
        </div>
    )
}

export default Navbar