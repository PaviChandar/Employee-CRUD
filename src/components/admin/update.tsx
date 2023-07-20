import { Button } from "@mui/material"

import { IEmployeeInput } from "../../shared/interface/employee.interface"
import "../../assets/update.scss"
import { useNavigate } from "react-router"

interface EditProps {
    editHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement |HTMLSelectElement >) => void
    stateValue: IEmployeeInput
    errors: IEmployeeInput
}

const EditComponent: React.FC<EditProps> = ({ editHandler, handleChange, stateValue, errors }) => {
    const navigate = useNavigate()
    
    return (
        <div className="update">
            <h1>Edit employee</h1>
            <div className="updateContainer">
                <form className="updateInputContainer">
                    <div className="updateInput">
                        <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={stateValue.id} readOnly />
                        <span className="error" >{errors.id}</span>
                    </div>
                    <div className="updateInput">
                        <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={stateValue.name} />
                        <span className="error">{errors.name}</span>
                    </div>
                    <div className="updateInput">
                        <input type="number" placeholder="age" name="age" onChange={(e) => handleChange(e)} value={stateValue.age} />
                        <span className="error">{errors.age}</span>
                    </div>
                    <div className="updateInput">
                        <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={stateValue.city} />
                        <span className="error">{errors.city}</span>
                    </div>
                    <div className="updateInput">
                        <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} value={stateValue.salary} />
                        <span className="error">{errors.salary}</span>
                    </div>
                </form>
            </div>
            <Button variant="outlined" sx={{ marginLeft:"-20px" ,marginRight:"8px" }}
              onClick={editHandler}>
                Update
            </Button>
            <Button variant="outlined" onClick={() => navigate('/admin')} >Go Back</Button>
        </div>
    )
}

export default EditComponent