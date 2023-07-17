import { Button } from "@mui/material"

import { IEmployeeInput } from "../../shared/interface/employee.interface"

interface EditProps {
    editHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement |HTMLSelectElement >) => void
    stateValue: IEmployeeInput
    errors: IEmployeeInput
}

const EditComponent: React.FC<EditProps> = ({ editHandler, handleChange, stateValue, errors }) => {
    
    return (
        <>
        <h1>Edit employee</h1>
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
        <Button onClick={editHandler}>Update</Button>
        </>
    )
}

export default EditComponent