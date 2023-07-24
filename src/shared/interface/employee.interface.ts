export interface IEmployeeInput {
    id: number
    name: string
    age: number
    city: string
    salary: number
    message?: string
}

export interface IEmployeeState {
    employee?: IEmployeeInput
    employees?: Array<IEmployeeInput>
    successMessage: string
    errorMessage: string
}

export interface IEmployee {
    employeeData: IEmployeeInput & IEmployeeState
    type: string
    payload: IEmployeeInput
}

export interface IEmployees {
    employeeData: IEmployeeInput & IEmployeeState
    type: string
    payload: IEmployeeInput[]
}

export type IEmployeeType = IEmployee & IEmployees