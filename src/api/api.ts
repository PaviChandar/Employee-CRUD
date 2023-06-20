import { UserInput } from "../shared/interface/user.interface"
import axiosInstance from "./axios"

export const userLogin = (user: UserInput) => {
    return axiosInstance.post('/login', user)
}

export const userRegister = (user: UserInput) => {
    return axiosInstance.post('/users', user)
}