export interface IUserInput {
    email: string,
    password: string
    username?: string
    login?: boolean
    message?: string
}

export interface IUserState {
    user?: IUserInput;
    users?: Array<IUserInput>
    login?: boolean
    // message: string
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