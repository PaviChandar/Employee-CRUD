import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import UserContainer from '../../container/user-container'

const Login = () => {

    const { loginUser } = UserContainer()

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setCredentials((prev) => ({ ...prev, [name] :value }))
    }

    const handleLogin = () => {
        console.log("inside handle login")
        loginUser(credentials)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="email" name="email" value={credentials.email} onChange={(e) => handleChange(e)} />
                <input type="password" placeholder="password" name="password" value={credentials.password} onChange={(e) => handleChange(e)} />
            </form>
            <Button onClick={() => handleLogin()} >Login</Button>
            <h3>If not an user, please sign-up</h3>
            <Button onClick={() => navigate('/signup')} >SignUp</Button>
        </div>
    )
}

export default Login