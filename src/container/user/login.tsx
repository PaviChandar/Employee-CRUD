import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";

import { loginUser } from ".";
import LoginComponent from "../../components/user/login";
import { IUserInput } from "../../shared/interface/user.interface";

interface State {
    credentials: IUserInput
    success: boolean
}

class Login extends Component<any, State> {

    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                email: "",
                password:""
            },
            success: false
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
        const token = localStorage.getItem('token')
        const login = localStorage.getItem('login')
        const { email , password } = this.state.credentials
        if(!(email && password)) {
            alert("Enter required details")
        } else {    
            this.props.loginUser(this.state.credentials)
            if(token) {
                if(login === 'true') {
                    alert("Admin logged-in")
                    this.setState({ success: true })
                } else {
                    alert("User logged-in")
                }
            }
        }
    }

   render() {

        return (
            <>
                <LoginComponent handleChange={this.handleChange} loginHandler={this.loginHandler} someState={this.state.credentials} />
                {
                    this.state.success? <Navigate to='/admin'/>: <Navigate to='/' />
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