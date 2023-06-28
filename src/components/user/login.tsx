import { Button } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import "../../assets/login.css"
import { IUser, IUserInput } from '../../shared/interface/user.interface'

type LoginProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginHandler: () => void
    someState: IUserInput
    errors: IUserInput
}

const LoginComponent: React.FC<LoginProps> = ({ handleChange, loginHandler, someState, errors }) => {

    // const { loginUser } = UserContainer()

    // const navigate = useNavigate()
    // const [credentials, setCredentials] = useState({
    //     email:'',
    //     password:''
    // })
    // const [error, setError] = useState<any>(false)
    // const [submit, setSubmit] = useState(false)

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    //     const { name, value } = e.target
    //     setCredentials((prev) => ({ ...prev, [name] :value }))
    //     setError(() => validateLogin(credentials))
    // }

    // const handleLogin = () => {
    //     setError(() => validateLogin(credentials))
    //     setSubmit(true)
    //     if(Object.keys(error).length === 0 && submit) {
    //         loginUser(credentials)
    //         if (localStorage.getItem('token')) {
    //             if (localStorage.getItem('login') === 'true') {
    //                 alert("Successfully admin logged in!")
    //                 navigate('/admin')
    //             } else {
    //                 alert("Successfully user logged in!")
    //                 navigate('/')
    //             }
    //         }
    //     }
    // }

    // return (
    //     <div className="loginContainer">
    //         <form className="loginInputContainer">
    //             <div className="loginInput">
    //                 <input type="text" placeholder="email" name="email" value={credentials.email} onChange={(e) => handleChange(e)} />
    //                 <span className='error'>{error.email}</span>
    //             </div>
    //             <div className="loginInput">
    //                 <input type="password" placeholder="password" name="password" value={credentials.password} onChange={(e) => handleChange(e)} />
    //                 <span className="error" >{error.password}</span>
    //             </div>
    //         </form>
    //             <Button color='secondary' sx={{backgroundColor: "ButtonHighlight"}}
    //                 onClick={() => handleLogin()} 
    //             >
    //                 Login
    //             </Button>
    //             <h3>If not an user, please sign-up</h3>
    //             <Button color='secondary' sx={{backgroundColor: "ButtonShadow"}}
    //                 onClick={() => navigate('/signup')} 
    //             >
    //                 SignUp
    //             </Button>
    //     </div>
    // )

    const navigate = useNavigate()

    const user = useSelector((state: IUser) => state.userData.user)
    console.log("user in state : ", user)

    return (
        <div className="loginContainer">
            <form className="loginInputContainer">
                <div className="loginInput">
                    <input type="text" placeholder="email" name="email" onChange={(e) => handleChange(e)} value={someState.email} />
                    <span className='error'>{errors.email}</span>
               </div>
                <div className="loginInput">
                    <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={someState.password} />
                    <span className='error'>{errors.password}</span>
                 </div>
            </form>
                <Button color='secondary' sx={{ backgroundColor: "ButtonHighlight" }}
                onClick={loginHandler}
                >
                    Login
                </Button>
                <h3>If not an user, please sign-up</h3>
                <Button color='secondary' sx={{ backgroundColor: "ButtonShadow" }}
                    onClick={() => navigate('/signup')} 
                >
                    SignUp
                </Button>
    </div>
    )

}

export default LoginComponent