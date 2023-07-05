export interface IUserInput {
    email: string,
    password: string
    username?: string
    login?: boolean
}

export interface IUserState {
    user?: IUserInput;
    users?: Array<IUserInput>
    login?: boolean
}

export interface IUser {
    userData: any; //array
    type: string;
    payload: IUserInput
}

export interface IUsers {
    userData: any;
    type: string;
    payload: IUserInput[]
}

export type IUserType = IUser