import { IUserInput } from "../shared/interface/user.interface"
import axiosInstance from "."

export const userLogin = (user: IUserInput) => {
    return axiosInstance.post('/login', user)
}

export const userRegister = (user: IUserInput) => {
    return axiosInstance.post('/users', user)
}

export const viewUser = (id: number) => {
    console.log("id in axios : ", id)
    return axiosInstance.get(`/user/${id}`)
}

export const userUpdate = (user: IUserInput, id: number) => {
    return axiosInstance.put(`/user/${id}`, user)
}