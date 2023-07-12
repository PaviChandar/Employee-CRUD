import { IEmployeeInput } from "../interface/employee.interface"

const nameRegex = /^[A-Za-z][A-Za-z ]{4,29}$/
const cityRegex = /^[a-zA-Z ]*$/

export const validateEmployee = (value: IEmployeeInput) => {
    const errors: any = {}

    if(!value.name) {
        errors.name = "*Name is required"
    } else if (!nameRegex.test(value.name)) {
        errors.name = "*Name can contain alphabets,space and length should be minimum 4 characters"
    }

    if(!value.id) {
        errors.id = "*Id is required"
    }

    if(!value.age) {
        errors.age = "*Age is required"
    }

    if(!value.city) {
        errors.city = "*City is required"
    } else if (!cityRegex.test(value.city)) {
        errors.city = "*City can have only alphabets and space"
    }

    if(!value.salary) {
        errors.salary = "*Salary is required"
    }

    return errors
}