import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import UserContainer from '../../container/user-container'
import { User } from '../../shared/interface/user.interface'
import GetToken from '../../shared/utils/get-token'
import getToken from '../../shared/utils/get-token'
import { validateLogin } from '../../shared/validation/validate'

const Login = () => {

    const { loginUser } = UserContainer()

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    // const user = useSelector((state: User) => state.userData)
    // console.log("user from state : ", user)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setCredentials((prev) => ({ ...prev, [name] :value }))
        setError(() => validateLogin(credentials))
    }

    const handleLogin = () => {
        setError(() => validateLogin(credentials))
        setSubmit(true)
        if(Object.keys(error).length === 0 && submit) {
            loginUser(credentials)
            setSuccess(true)
        }
    }

    useEffect(() => {
        console.log("inside use effect")
        if(localStorage.getItem('token')) {
            console.log("inside main if")
            if(localStorage.getItem('token') === 'true') {
                console.log("inside if")
                alert("Admin logged-in successfully!")
                navigate('/admin')
            } else {
                console.log("inside else")
                alert("User logged-in successfully!")
                navigate('/')
            }
        }
    }, [success, navigate])

    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder="email" name="email" value={credentials.email} onChange={(e) => handleChange(e)} />
                    <span>{error.email}</span>
                </div>
                <div>
                    <input type="password" placeholder="password" name="password" value={credentials.password} onChange={(e) => handleChange(e)} />
                    <span>{error.password}</span>
                </div>
            </form>
            <Button onClick={() => handleLogin()} >Login</Button>
            <h3>If not an user, please sign-up</h3>
            <Button onClick={() => navigate('/signup')} >SignUp</Button>
        </div>
    )
}

export default Login