import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";

import { isLogin , loginUser } from ".";
import LoginComponent from "../../components/user/login";
import { IUserInput } from "../../shared/interface/user.interface";
import { localStorageKey } from "../../shared/storage/token";
import { validateLogin } from "../../shared/validation/validate";
import { setMessage, userLoggedIn } from "../../store/action/action";
// import loginUser from "../../store/logic/login";

interface State {
    credentials: IUserInput
    success: boolean
    errors: any
    login: boolean
    message: string
}

class Login extends Component<any, State> {

    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                email: "",
                password:""
            },
            success: false,
            errors: {},
            login:false,
            message:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginHandler = this.loginHandler.bind(this)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        const { email, password } = this.state.credentials
        const errors = validateLogin(this.state.credentials)

        this.setState((prev: { credentials: any }) => ({
            credentials: {
                ...prev.credentials,
                [name]: value
            }
        }))

        if(!(email && password)) {
            validateLogin(this.state.credentials)
            this.setState({ errors })
        }
    }

    loginHandler = () => {
        this.props.loginUser(this.state.credentials)
    }    

    render() {

        return (
            <>
                <LoginComponent handleChange={this.handleChange} someState={this.state.credentials} errors={this.state.errors} />
                {
                    this.props.login? <Navigate to='/admin'/>: <Navigate to='/' />
                }
            </>
        )
   }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    
    return {
        loginUser: (credentials: IUserInput) => dispatch(loginUser(credentials))
    }
}

export default connect (null, mapDispatchToProps)(Login)