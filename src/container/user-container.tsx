import { useDispatch } from "react-redux"
import { UserInput } from "../shared/interface/user.interface"

const UserContainer = () => {
    const dispatch = useDispatch()

    const loginUser = (user: UserInput) => {
        dispatch({ type: 'LOGIN', payload: user })
    }

    const registerUser = (user: UserInput) => {
        dispatch({ type: 'SIGN_UP', payload: user })
    }

    return {
        loginUser,
        registerUser
    }
}

export default UserContainer