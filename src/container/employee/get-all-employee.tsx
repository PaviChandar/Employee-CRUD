import { Component } from "react"
import GetAllEmployeeComponent from "../../components/admin/get-all-employee"

class GetAllEmployee extends Component {
    constructor(props: Object) {
        super(props)
        this.state = {
            success: false
        }
    }

    render() {
        return (
            <div>
                <h1>Getting all employees</h1>
                <GetAllEmployeeComponent />
            </div>
        )
    }
}

export default GetAllEmployee