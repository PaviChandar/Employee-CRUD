import { UserInput } from "../interface/user.interface";

export const validateLogin = (value: UserInput) => {
    // const errors: UserInput = { email: "", password: "" }
    const errors: any = {}

    if(!value.email) {
        errors.email = "*Email is required"
    }

    if(!value.password) {
        errors.password = "*Password is required"
    }

    return errors
}

export const validateSignUp = (value: UserInput) => {
    const errors: any = {}

    if(!value.email) {
        errors.email = "*Email is required"
    }

    if(!value.password) {
        errors.password = "*Password is required"
    }

    if(!value.username) {
        errors.username = "*Username is required"
    }

    return errors
}