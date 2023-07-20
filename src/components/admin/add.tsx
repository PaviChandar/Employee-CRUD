import { Button } from "@mui/material"
import { useNavigate } from "react-router"

import { IEmployeeInput } from "../../shared/interface/employee.interface"
import "../../assets/add.scss"

interface AddProps {
    addHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    stateValue: IEmployeeInput
    errors: IEmployeeInput
}

const AddNewEmployee: React.FC<AddProps> = ({ addHandler, handleChange, stateValue, errors }) => {
    const navigate = useNavigate()

    return (
        <div className="add">
            <h1>Add employee page</h1>
            <div className="addContainer" >
                <form className="addInputContainer">
                    <div className="addInput">
                        <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={stateValue.id} className="addId" />
                        <span className="error" >{errors.id}</span>
                    </div>
                    <div className="addInput">
                        <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={stateValue.name} />
                        <span className="error">{errors.name}</span>
                    </div>
                    <div className="addInput">
                        <input type="number" placeholder="age" name="age" onChange={(e) => handleChange(e)} value={stateValue.age} />
                        <span className="error">{errors.age}</span>
                    </div>
                    <div className="addInput">
                        <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={stateValue.city} />
                        <span className="error">{errors.city}</span>
                    </div>
                    <div className="addInput">
                        <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} value={stateValue.salary} />
                        <span className="error">{errors.salary}</span>
                    </div>
                </form>
            </div>
            <Button variant="outlined" sx={{ marginLeft:"-20px" ,marginRight:"8px" }}
              onClick={addHandler}>
                Add
            </Button>
            <Button variant="outlined" onClick={() => navigate('/admin')} >Go Back</Button>
        </div>
    )
}

export default AddNewEmployee