export interface IEmployeeInput {
    id: number
    name: string
    age: number
    city: string
    salary: number
}

export interface IEmployee {
    employeeData: any
    type: string
    payload: IEmployeeInput
}

export interface IEmployees {
    employeeData: any
    type: string
    payload: IEmployeeInput[]
}

export interface IEmployeeState {
    employee?: IEmployeeInput
    employees?: Array<IEmployeeInput>
}

export type IEmployeeType = IEmployee & IEmployees