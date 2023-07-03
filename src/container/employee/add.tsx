import { Component } from "react";
import AddNewEmployee from "../../components/admin/add";

class AddEmployee extends Component {

    addHandler = () => {
        console.log("inside add handler")
    }

    render() {
        return (
            <>
                <AddNewEmployee addHandler={this.addHandler} />
            </>
        )
    }
}

export default AddEmployee