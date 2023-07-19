import jwtDecode from "jwt-decode"

export const localStorageKey = (value: string) => {
    return localStorage.getItem(value)
}

export const decodeTokenValue = () => {
    let token: string, decodeToken: { username:'', email: '', Id:0 }

    token = JSON.stringify(localStorageKey("token"))
    decodeToken = jwtDecode(token)

    return decodeToken
}

export const removeToken = (value: string) => {
    return localStorage.removeItem(value)
}