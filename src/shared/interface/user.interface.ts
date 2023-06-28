export interface IUserInput {
    email: string,
    password: string
    username?: string
}

export interface IUserState {
    user?: IUserInput;
    users?: Array<IUserInput>
    login?: boolean
}

export interface IUser {
    userData: IUserState
    type: string
    payload: IUserInput
}

export interface IUsers {
    // userData: any;
    userData: IUserState,
    type: string;
    payload: IUserInput[]
}

export type IUserType = IUser 