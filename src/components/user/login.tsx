import { Button } from '@mui/material'

import "../../assets/login.scss"
import { handleNavigation } from '../../shared/component/navigation'
import { IUserInput } from '../../shared/interface/user.interface'

type LoginProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    loginHandler: () => void
    someState: IUserInput
    errors: IUserInput
}

function LoginComponent ({ handleChange, loginHandler, someState, errors }: LoginProps)  {

    return (
        <div className="loginContainer">
            <form className="loginInputContainer">
                <div className="loginInput">
                    <input data-testid="login-email-input" type="text" placeholder="email" name="email" onChange={(e) => handleChange(e)} value={someState.email} />
                    <span data-testid="email-error" className='error' >{errors.email}</span>
                </div>
                <div className="loginInput">
                    <input data-testid="login-password-input" type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={someState.password} />
                    <span data-testid="password-error" className='error'>{errors.password}</span>
                </div>
            </form>
            <Button color='secondary' sx={{backgroundColor: "ButtonHighlight"}}
                onClick={loginHandler} 
            >
                Login
            </Button>
            <h3 data-testid="login-h3-tag" >If not an user, please sign-up</h3>
            <Button color='secondary' data-testid="signup-button" sx={{backgroundColor: "ButtonShadow"}}
                onClick={() => handleNavigation('/signup')} 
            >
                SignUp
            </Button>
        </div>
    )

}

export default LoginComponent