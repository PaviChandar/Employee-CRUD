import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"

import UserContainer from "../../container/user-container"
import { validateSignUp } from "../../shared/validation/validate"
import "../../assets/sign-up.css"

const SignUp = () => {

    const { registerUser } = UserContainer()

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        username:'',
        email:'',
        password:''
    })
    const [error, setError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setCredentials((prev) => ({...prev, [name]: value}))
        setError(() => validateSignUp(credentials))
    }

    const handleSignUp = () => {
        setError(() => validateSignUp(credentials))
        setSubmit(true)
        if(Object.keys(error).length === 0 && submit) {
            registerUser(credentials)
            alert("Employee registered successfully!")
            navigate('/login')
        }
    }

    return (
        <div className="signUpContainer" >
            <form className="signUpInputContainer" >
                <div className="signUpInput">
                    <input type="text" placeholder="email" name="email" value={credentials.email} onChange={(e) => handleChange(e)} />
                    <span>{error.email}</span>
                </div>
                <div className="signUpInput" >
                    <input type="text" placeholder="username" name="username" value={credentials.username} onChange={(e) => handleChange(e)} />
                    <span>{error.username}</span>
                </div>
                <div className="signUpInput" >
                    <input type="password" placeholder="password" name="password" value={credentials.password} onChange={(e) => handleChange(e)} />
                    <span>{error.password}</span>
                </div>
            </form>
            <Button onClick={() => handleSignUp()} className="signUpButton">Sign Up</Button>
            <Button onClick={() => navigate('/login')} className="signUpLoginButton">Login</Button>
        </div>
    )
}

export default SignUp