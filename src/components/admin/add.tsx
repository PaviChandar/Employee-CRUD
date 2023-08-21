import { Button } from "@mui/material"
import { useNavigate } from "react-router"

import { IEmployeeInput } from "../../shared/interface/employee.interface"
import "../../assets/add.scss"
import { handleNavigation } from "../../shared/component/navigation"

interface AddProps {
    addHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    stateValue: IEmployeeInput
    errors: IEmployeeInput
}

const AddNewEmployee: React.FC<AddProps> = ({ addHandler, handleChange, stateValue, errors }) => {

    return (
        <div className="add">
            <h1>Add employee page</h1>
            <div className="addContainer" >
                <form className="addInputContainer">
                    <div className="addInput">
                        <input data-testid="add-id" type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={stateValue.id} className="addId" />
                        <span data-testid="add-id-error" className="error" >{errors.id}</span>
                    </div>
                    <div className="addInput">
                        <input data-testid="add-name" type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={stateValue.name} />
                        <span data-testid="add-name-error" className="error">{errors.name}</span>
                    </div>
                    <div className="addInput">
                        <input data-testid="add-age" type="number" placeholder="age" name="age" onChange={(e) => handleChange(e)} value={stateValue.age} />
                        <span data-testid="add-age-error" className="error">{errors.age}</span>
                    </div>
                    <div className="addInput">
                        <input data-testid="add-city" type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={stateValue.city} />
                        <span data-testid="add-city-error" className="error">{errors.city}</span>
                    </div>
                    <div className="addInput">
                        <input data-testid="add-salary" type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} value={stateValue.salary} />
                        <span data-testid="add-salary-error" className="error">{errors.salary}</span>
                    </div>
                </form>
            </div>
            <Button data-testid="add-button" variant="outlined" sx={{ marginLeft:"-20px" ,marginRight:"8px" }}
              onClick={addHandler}>
                Add
            </Button>
            <Button data-testid="add-back-button" variant="outlined" onClick={() => handleNavigation('/admin')} >Go Back</Button>
        </div>
    )
}

export default AddNewEmployee