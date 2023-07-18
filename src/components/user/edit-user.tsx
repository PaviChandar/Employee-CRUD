import { useSelector } from "react-redux"

import { IUserInput } from "../../shared/interface/user.interface"

interface EditProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    stateValue: IUserInput   
}

const EditUserComponent: React.FC<EditProps> = ({handleChange,stateValue}) => {
    console.log("stateval : ", stateValue)

    const user = useSelector((state: any) => state.userData.user)

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const {name, value}
    // }

    return (
        <div>
            <form>
                <input type="text" placeholder="email" name="email" value={user.email} readOnly  />
                <input type="text" placeholder="username" name="username" onChange={(e) => handleChange(e)} value={user.username} />
                <input type="text" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={user.userpassword} />
            </form>
        </div>
    )
}

export default EditUserComponent