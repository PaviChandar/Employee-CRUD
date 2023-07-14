import { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getSingleEmployee, updateEmployee } from ".";
import { URLSearchParams } from "url";

import EditComponent from "../../components/admin/update";
import { IEmployeeInput } from "../../shared/interface/employee.interface";
import { validateEmployee } from "../../shared/validation/validate-employee";
import withRouter from "../withRouter";

interface State {
    credentials: IEmployeeInput
    success: boolean
    errors: any
    editState: any
}

class EditEmployee extends Component<any,State> {
    constructor(props: any) {
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
            editState: {}
        }

        this.editHandler = this.editHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const id = this.props.params.id
        this.props.getSingleEmployee(id)
    }

    componentDidUpdate(prevProps: { data: any; }, prevState: any) {
        if (prevProps.data !== this.props.data)
          this.setState({ editState: this.props.data });
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        this.setState((prev: { editState: any; }) => ({
            ...(prev.editState = {
              ...prev.editState,
              [name]: value,
            })
          }))
    }

    editHandler = () => {
        const { id,name,age,city,salary } = this.state.editState
        const errors = validateEmployee(this.state.editState)

        if(!(id && name && age && city && salary)) {
            this.setState({ errors })
        } else {
            this.props.updateEmployee(this.state.editState)
            this.setState({ success: true })
        }
    }

    render() {
        
        return (
            <>
            {console.log(" state props ; ", this.props.data)}
            {console.log("edit state in return : ", this.state.editState)}
                <EditComponent editHandler={this.editHandler} 
                handleChange= {this.handleChange} 
                stateValue={this.state.editState}
                 errors={this.state.errors} />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateEmployee : (credentials: IEmployeeInput) => dispatch(updateEmployee(credentials)),
        getSingleEmployee: (id: number) => dispatch(getSingleEmployee(id))
    }
}

const mapStateToProps = (state: any) => ({
    data: state.employeeData.employee
})

export default withRouter(connect (mapStateToProps,mapDispatchToProps) (EditEmployee))