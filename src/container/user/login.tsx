import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";

import { login, loginUser } from ".";
import LoginComponent from "../../components/user/login";
import { IUserInput } from "../../shared/interface/user.interface";
import { localStorageKey } from "../../shared/storage/token";
import { validateLogin } from "../../shared/validation/validate";

interface State {
    credentials: IUserInput
    success: boolean
    errors: any
    logState: boolean
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
            logState: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginHandler = this.loginHandler.bind(this)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState((prev: { credentials: any; }) => ({
            credentials: {
                ...prev.credentials,
                [name]: value
            }
        }))
    }

    loginHandler = () => {
        const { email, password } = this.state.credentials
        const errors = validateLogin(this.state.credentials)

        if(!(email && password)) {
            validateLogin(this.state.credentials)
            this.setState({ errors })
        } else {    
            this.props.loginUser(this.state.credentials)
            this.props.login(this.state.logState)

            console.log("log func : ",this.props.loginUser(this.state.credentials))
            console.log("log func state : ",this.state.credentials)
            console.log("function : ",this.props.login(this.state.logState) )
            console.log("function state : ",this.state.logState) 

            if(localStorageKey('token')) {
                if(this.state.logState === false) {
                    console.log("inside if ")
                    alert("User logged-in")
                } else {
                    console.log("inside else admin ")
                    alert("Admin logged-in")
                    this.setState({ success: true })
                    this.setState({ logState: true })
                }
            }

            // if(localStorageKey('token')) {
            //     if(localStorageKey('login') === 'true') {
            //         alert("Admin logged-in")
            //         this.setState({ success: true })
            //     } else {
            //         alert("User logged-in")
            //     }
            // }
        }
    }

   render() {

        return (
            <>
                <LoginComponent handleChange={this.handleChange} loginHandler={this.loginHandler} someState={this.state.credentials} errors={this.state.errors} />
                {console.log("succ , log : ",this.state.success, this.state.logState )}
                {
                    // this.state.success? <Navigate to='/admin'/>: <Navigate to='/' />
                    this.state.success && this.state.logState? <Navigate to='/'/>: <Navigate to='/admin' />
                }
            </>
        )
   }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    
    return {
        loginUser: (credentials: IUserInput) => dispatch(loginUser(credentials)),
        login: (logState: boolean) => dispatch(login(logState))
    }
}

export default connect (null, mapDispatchToProps)(Login)