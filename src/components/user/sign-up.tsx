import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

import "../../assets/sign-up.scss"
import { handleNavigation } from "../../shared/component/navigation"
import { IUserInput } from "../../shared/interface/user.interface"

type SignProps = {
    handleSignUp: () => void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    someState: IUserInput
}

const SignUpComponent: React.FC<SignProps> = ({ handleSignUp, handleChange, someState }) => {

    return (
        <div className="signUpContainer" >
            <h1>Sign-up new user</h1>
            <form className="signUpInputContainer">
                <div className="signUpInput">
                    <input type="text" data-testid="signup-email" placeholder="email" name="email" onChange={(e) => handleChange(e)} value={someState.email} />
                </div>
                <div className="signUpInput">
                    <input type="text" data-testid="signup-username" placeholder="username" onChange={(e) => handleChange(e)} name="username" value={someState.username} />
                </div>
                <div className="signUpInput">
                    <input type="password" data-testid="signup-password" placeholder="password" onChange={(e) => handleChange(e)} name="password" value={someState.password} />
                </div>
            </form>
            <Button data-testid="signup-button" color="info" variant="contained" sx={{backgroundColor: "black", marginRight: "10px", marginLeft: "-15px"}}
                onClick={handleSignUp}
            > 
                SignUp
            </Button>
            <Button data-testid="signup-login-button" color="info" variant="contained" sx={{backgroundColor: "black"}}
                onClick={() => handleNavigation('/login')}
            >
                Login
            </Button>
        </div>
    )
}

export default SignUpComponent