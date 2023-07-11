import { Component } from "react";
import { connect } from "react-redux";
import { Navigate, redirect } from "react-router";
import { Dispatch } from "redux";

import {loginUser } from ".";
import LoginComponent from "../../components/user/login";
import { IUserInput } from "../../shared/interface/user.interface";
import { validateLogin } from "../../shared/validation/validate";

interface State {
    credentials: IUserInput
    success: boolean
    errors: any
    login: boolean
    userData: any
    successMessage: string | null
    errorMessage: string | null
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
            successMessage:"",
            errorMessage:"",
            userData: {}
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
        const { successMessage, errorMessage, login } = this.props

        return (
            <>
                <LoginComponent handleChange={this.handleChange} loginHandler={this.loginHandler} someState={this.state.credentials} errors={this.state.errors} />
                {successMessage && <div>{successMessage}</div>}
                {errorMessage && <div>{errorMessage}</div>}
                {
                    login? <Navigate to='/admin/' /> : <Navigate to='/' />
                }
            </>
        )
   }

}

const mapStateToProps = (state: State) =>  ({
    successMessage: state.userData.successMessage,
    errorMessage: state.userData.errorMessage,
    login: state.userData.user.login
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    
    return {
        loginUser: (credentials: IUserInput) => dispatch(loginUser(credentials))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Login)