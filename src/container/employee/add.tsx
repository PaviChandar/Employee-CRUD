import { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Dispatch } from "redux";

import { addEmployee } from ".";
import AddNewEmployee from "../../components/admin/add";
import { IEmployeeInput, IEmployeeState } from "../../shared/interface/employee.interface";
import { validateEmployee } from "../../shared/validation/validate-employee";

interface State {
    credentials: IEmployeeInput
    success: boolean
    errors: any
    employeeData?: IEmployeeInput & IEmployeeState | any
    successMessage: string | null
    errorMessage: string | null
}

class AddEmployee extends Component<any, State> {
    
    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                id:0,
                name:'',
                age:0,
                city:'',
                salary:0
            },
            success: false,
            errors: {},
            employeeData: {},
            successMessage:"",
            errorMessage:"",
        }

        this.addHandler = this.addHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState((prev) => ({
            credentials: {
                ...prev.credentials,
                [name]: value
            }
        }))

    }

    addHandler = () => {
        const { id,name,age,city,salary } = this.state.credentials
        const errors = validateEmployee(this.state.credentials)

        if(!(id && name && age && city && salary)) {
            this.setState({ errors })
        } else {
            this.props.addEmployee(this.state.credentials)
            this.setState({ success: true })
        }
    }

    render() {
        const { successMessage, errorMessage } = this.props

        return (
            <>  
                <AddNewEmployee addHandler={this.addHandler} handleChange={this.handleChange} stateValue= {this.state.credentials} errors={this.state.errors} />
                {successMessage && <div>{successMessage}</div> }
                {errorMessage && <div>{errorMessage}</div>}
                {
                    this.state.success && successMessage? <Navigate to='/admin' /> : null
                }
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addEmployee : (credentials: IEmployeeInput) => dispatch(addEmployee(credentials))
    }
}

const mapStateToProps = (state: State) => ({
    successMessage: state.employeeData.successMessage,
    errorMessage: state.employeeData.errorMessage
})

export default connect (mapStateToProps, mapDispatchToProps)(AddEmployee)