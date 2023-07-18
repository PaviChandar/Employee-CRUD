export interface IUserInput {
    id?: number
    email?: string,
    password?: string
    username?: string
    login?: boolean| null
    message?: string
}

export interface IUserState {
    user?: IUserInput;
    users?: Array<IUserInput>
    login?: boolean| null
    successMessage: string
    errorMessage: string
}

export interface IUser {
    userData: IUserInput; 
    type: string;
    payload: IUserInput
}

export interface IUsers {
    userData: IUserInput;
    type: string;
    payload: IUserInput[]
}

export type IUserType = IUser