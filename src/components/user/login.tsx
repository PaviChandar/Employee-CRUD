import { Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import "../../assets/login.css"
import { loginUser } from '../../container/user'
import { IUserInput } from '../../shared/interface/user.interface'
import { setMessage } from '../../store/action/action'

type LoginProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    // loginHandler: () => void
    someState: IUserInput
    errors: IUserInput
}

const LoginComponent: React.FC<LoginProps> = ({ handleChange, someState, errors }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [msg, setMsg] = useState<any>("")

    const handleLogin = () => {
        console.log("cred inside handle : ", someState)
        dispatch(loginUser(someState))
        dispatch({
            type: 'SET_MESSAGE',
            payload: msg
        })
        // dispatch(setMessage(msg))
        setMsg(msg)

        // alert(msg)
    }

    return (
        <div className="loginContainer">
            <form className="loginInputContainer">
                <div className="loginInput">
                    <input type="text" placeholder="email" name="email" onChange={(e) => handleChange(e)} value={someState.email} />
                    <span className='error' >{errors.email}</span>
                </div>
                <div className="loginInput">
                    <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={someState.password} />
                    <span className='error'>{errors.password}</span>
                </div>
            </form>
            <Button color='secondary' sx={{backgroundColor: "ButtonHighlight"}}
                onClick={handleLogin} 
            >
                Login
            </Button>
            <h3>If not an user, please sign-up</h3>
            <Button color='secondary' sx={{backgroundColor: "ButtonShadow"}}
                onClick={() => navigate('/signup')} 
            >
                SignUp
            </Button>
        </div>
    )

}

export default LoginComponent