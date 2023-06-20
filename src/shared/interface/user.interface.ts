export interface UserInput {
    email: string,
    password: string
    username?: string
}

export interface UserState {
    user?: UserInput;
    users?: Array<UserInput>
    login?: boolean
}

export interface User {
    userData: any;
    type: string;
    payload: UserInput
}

export interface Users {
    userData: any;
    type: string;
    payload: UserInput[]
}

export type UserType = User