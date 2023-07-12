import { Component } from "react";

import EditComponent from "../../components/admin/update";

class EditEmployee extends Component<any,any> {
    constructor(props: Object) {
        super(props)
        this.state = {
            success: false
        }

        this.editHandler = this.editHandler.bind(this)
    }

    editHandler = () => {
        console.log("inside edit handler")
    }

    render() {
        return (
            <>
                <div>Edit class</div>
                <EditComponent editHandler={this.editHandler} />
            </>
        )
    }
}

export default EditEmployee