export interface IEmployeeInput {
    id: number
    name: string
    age: number
    city: string
    salary: number
    message?: string
}

export interface IEmployee {
    employeeData: IEmployeeInput
    type: string
    payload: IEmployeeInput
}

export interface IEmployees {
    employeeData: IEmployeeInput
    type: string
    payload: IEmployeeInput[]
}

export interface IEmployeeState {
    employee?: IEmployeeInput
    employees?: Array<IEmployeeInput>
    successMessage: string
    errorMessage: string
}

export type IEmployeeType = IEmployee & IEmployees