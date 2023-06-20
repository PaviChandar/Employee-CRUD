export interface EmployeeInput {
    id: number
    name: string
    age: number
    city: string
    salary: number
}

export interface Employee {
    employeeData: any
    type: string
    payload: EmployeeInput
}

export interface Employees {
    employeeData: any
    type: string
    payload: EmployeeInput[]
}

export interface EmployeeState {
    employee: EmployeeInput
    employees: Array<EmployeeInput>
}

export type EmployeeType = Employee & Employees