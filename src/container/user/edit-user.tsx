import { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { editUser, viewUser } from ".";
import EditUserComponent from "../../components/user/edit-user";
import { IUserInput } from "../../shared/interface/user.interface";
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
            // editState:{},
            success: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.updateHandler = this.updateHandler.bind(this)
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

    updateHandler = () => {
        this.props.editUser(this.state.credentials)
    }

    render() {
        // const { username, email, password, data } = this.props

        return (
            <>
                <h1>Edit user container</h1>
                <EditUserComponent 
                    handleChange={this.handleChange} 
                    stateValue={this.state.data}
                    updateHandler={this.updateHandler}
                />
            </>
        )
    }
}

const mapStateToProps = (state: any) => ({
    data: state.userData.user
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        viewUser : (id: number) => dispatch(viewUser(id)),
        editUser: (credentials: IUserInput) => dispatch(editUser(credentials))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUser))