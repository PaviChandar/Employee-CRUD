import { useDispatch } from "react-redux"

import { IUserInput } from "../shared/interface/user.interface"

const UserContainer = () => {
    const dispatch = useDispatch()

    const loginUser = (user: IUserInput) => {
        dispatch({ type: 'LOGIN', payload: user })
    }

    const registerUser = (user: IUserInput) => {
        dispatch({ type: 'SIGN_UP', payload: user })
    }

    return {
        loginUser,
        registerUser
    }
}

export default UserContainer