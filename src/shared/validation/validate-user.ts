import { IUserInput } from "../interface/user.interface";

const emailRegex = /^([a-z]+[.-\d]*)@([a-z-]+)\.([a-z-]{2,8})(\.[a-z]{2,8})?$/
const nameRegex = /^[A-Za-z][A-Za-z ]{7,29}$/
const passwordRegex = /^[a-zA-Z0-9]{7,20}$/

export const validateLogin = (value: IUserInput) => {
    const errors: any = {}

    if(!value.email) {
        errors.email = "*Email is required"
    } else if (!emailRegex.test(value.email)) {
        errors.email = "*Invalid email"
    }

    if(!value.password) {
        errors.password = "*Password is required"
    } else if (!passwordRegex.test(value.password)) {
        errors.password = "*Invalid password"
    }

    return errors
}

export const validateSignUp = (value: IUserInput) => {
    const errors: any = {}

    if(!value.email) {
        errors.email = "*Email is required"
    } else if (!emailRegex.test(value.email)) {
        errors.email = "*Invalid email"
    }

    if(!value.password) {
        errors.password = "*Password is required"
    } else if (!passwordRegex.test(value.password)) {
        errors.password = "*Invalid password"
    }

    if(!value.username) {
        errors.username = "*Username is required"
    } else if (!nameRegex.test(value.username)) {
        errors.username = "*Name can contain alphabets,space and length should be minimum 4 characters"
    }

    return errors
}