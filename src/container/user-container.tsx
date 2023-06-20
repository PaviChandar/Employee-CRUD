import { useDispatch } from "react-redux"
import { UserInput } from "../shared/interface/user.interface"

const UserContainer = () => {
    const dispatch = useDispatch()

    const loginUser = (user: UserInput) => {
        dispatch({ type: 'LOGIN', payload: user})
    }

    return {
        loginUser
    }
}

export default UserContainer