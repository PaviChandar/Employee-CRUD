import Button from "@mui/material/Button"
import { useSelector } from "react-redux"

interface EditProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    updateHandler: () => void 
}

const EditUserComponent: React.FC<EditProps> = ({ handleChange, updateHandler }) => {

    const user = useSelector((state: any) => state.userData.user)

    return (
        <div>
            <form>
                <input type="text" placeholder="email" name="email" value={user.email} readOnly  />
                <input type="text" placeholder="username" name="username" onChange={(e) => handleChange(e)} value={user.username} />
                <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={user.userpassword} />
            </form>
            <Button onClick={updateHandler}>Update</Button>
        </div>
    )
}

export default EditUserComponent