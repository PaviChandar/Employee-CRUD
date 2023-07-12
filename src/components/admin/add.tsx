import { Button } from "@mui/material"

import { IEmployeeInput } from "../../shared/interface/employee.interface"

interface AddProps {
    addHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    stateValue: IEmployeeInput
    errors: IEmployeeInput
}

const AddNewEmployee: React.FC<AddProps> = ({ addHandler, handleChange, stateValue, errors }) => {
    return (
        <div>
            <h1>Add employee page</h1>
            <div>
                <form>
                    <div>
                        <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={stateValue.id} />
                        <span className="error" >{errors.id}</span>
                    </div>
                    <div>
                        <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={stateValue.name} />
                        <span className="error">{errors.name}</span>
                    </div>
                    <div>
                        <input type="number" placeholder="age" name="age" onChange={(e) => handleChange(e)} value={stateValue.age} />
                        <span className="error">{errors.age}</span>
                    </div>
                    <div>
                        <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={stateValue.city} />
                        <span className="error">{errors.city}</span>
                    </div>
                    <div>
                        <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} value={stateValue.salary} />
                        <span className="error">{errors.salary}</span>
                    </div>
                </form>
            </div>
            <Button onClick={addHandler} >Add</Button>
        </div>
    )
}

export default AddNewEmployee