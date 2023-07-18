import { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { viewUser } from ".";

import EditUserComponent from "../../components/user/edit-user";
import withRouter from "../withRouter";

class EditUser extends Component<any,any> {
    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                username:'',
                email:'',
                password:''
            },
            editState:{},
            success: false,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const id = this.props.params.id
        console.log("id in compmount : ", id)
        this.props.viewUser(id)
    }

    componentDidUpdate(prevProps: { data: any }, prevState: any) {
        if (prevProps.data !== this.props.data) {
            this.setState({ credentials: this.props.data })
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        this.setState((prev: { credentials: any; }) => ({
            ...(prev.credentials = {
              ...prev.credentials,
              [name]: value,
            })
        }))
    }

    render() {
        const { username, email, password, data } = this.props

        return (
            <>
               {console.log("userdata whole : ", data)}
               {console.log("indiv data : ", username,email,password)}
                <h1>Edit user container</h1>
                <EditUserComponent 
                handleChange={this.handleChange} 
                stateValue={this.state.data}
                 />
            </>
        )
    }
}

const mapStateToProps = (state: any) => ({
    data: state.userData.user,
    username: state.userData.user.username,
    email: state.userData.user.email,
    password: state.userData.user.userpassword
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        viewUser : (id: number) => dispatch(viewUser(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUser))