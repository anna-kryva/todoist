export interface User {
    email: string,
    password: string,
    returnSecureToken?: boolean
}

export interface FbAuthResponse {
    idToken: string,
    expiresIn: string
}

export interface Todo {
    userId?: number,
    id?: number,
    title: string,
    completed: boolean
}

export interface Completed {
    done: boolean,
    notdone: boolean
}