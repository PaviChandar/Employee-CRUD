import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

import "../../assets/login.scss"
import { IUserInput } from '../../shared/interface/user.interface'

type LoginProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginHandler: () => void
    someState: IUserInput
    errors: IUserInput
}

const LoginComponent: React.FC<LoginProps> = ({ handleChange, loginHandler, someState, errors }) => {

    const navigate = useNavigate()

    return (
        <div className="loginContainer">
            <form className="loginInputContainer">
                <div className="loginInput">
                    <input data-testid="login-email-input" type="text" placeholder="email" name="email" onChange={(e) => handleChange(e)} value={someState.email} />
                    <span data-testid="login-email-error" className='error' >{errors.email}</span>
                </div>
                <div className="loginInput">
                    <input data-testid="login-password-input" type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={someState.password} />
                    <span data-testid="login-password-error" className='error'>{errors.password}</span>
                </div>
            </form>
            <Button color='secondary' sx={{backgroundColor: "ButtonHighlight"}}
                onClick={loginHandler} 
            >
                Login
            </Button>
            <h3 data-testid="login-h3-tag" >If not an user, please sign-up</h3>
            <Button color='secondary' sx={{backgroundColor: "ButtonShadow"}}
                onClick={() => navigate('/signup')} 
            >
                SignUp
            </Button>
        </div>
    )

}

export default LoginComponent