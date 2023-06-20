import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"

const SignUp = () => {

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setCredentials((prev) => ({...prev, [name]: value}))
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="email" name="email" value={credentials.email} onChange={(e) => handleChange(e)} />
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={(e) => handleChange(e)} />
                <input type="password" placeholder="password" name="password" value={credentials.password} onChange={(e) => handleChange(e)} />
            </form>
            <Button>Sign Up</Button>
            <Button onClick={() => navigate('/login')} >Login</Button>
        </div>
    )
}

export default SignUp