import { IUserInput } from "../shared/interface/user.interface"
import axiosInstance from "."

export const userLogin = (user: IUserInput) => {
    return axiosInstance.post('/login', user)
}

export const userRegister = (user: IUserInput) => {
    return axiosInstance.post('/users', user)
}

export const userUpdate = (user: IUserInput, id: number) => {
    return axiosInstance.put(`/users/${id}`, user)
}