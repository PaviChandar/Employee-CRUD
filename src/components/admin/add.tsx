import { Button } from "@mui/material"

interface AddProps {
    addHandler: () => void
}

const AddNewEmployee: React.FC<AddProps> = ({ addHandler }) => {
    return (
        <div>
            <h1>Add employee page</h1>
            <form>
                <input type="text" placeholder="id" />
                <input type="text" placeholder="name" />
                <input type="text" placeholder="age" />
                <input type="text" placeholder="city" />
                <input type="text" placeholder="salary" />
            </form>
            <Button onClick={addHandler} >Add</Button>
        </div>
    )
}

export default AddNewEmployee