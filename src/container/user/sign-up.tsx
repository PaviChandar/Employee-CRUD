import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";

import { registerUser } from ".";
import SignUpComponent from "../../components/user/sign-up";
import { IUserInput } from "../../shared/interface/user.interface";

type State = {
    credentials: IUserInput
    success: boolean
}

class SignUp extends Component<any, State> {
    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                email:"",
                password:"",
                username:""
            },
            success: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target

        this.setState((prev: { credentials: any }) => ({
            credentials: {
                ...prev.credentials,
                [name]: value
            }
        }))
    }

    handleSignUp = () => {
        const { email, username, password } = this.state.credentials
        if(!(email && username && password)) {
            alert('Enter required details')
        } else {
            this.props.registerUser(this.state.credentials)
        }
    }

    render() {
        return (
            <div>
                <SignUpComponent handleChange={this.handleChange} handleSignUp={this.handleSignUp} someState={this.state.credentials} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        registerUser : (credentials: IUserInput) => dispatch(registerUser(credentials))
    }
}

export default connect (null, mapDispatchToProps) (SignUp)