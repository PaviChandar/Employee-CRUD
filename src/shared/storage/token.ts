export const token = localStorage.getItem('token')
export const login = localStorage.getItem('login')

export const localStorageKey = (value: string) => {
    // localStorage.getItem(JSON.stringify(value));
    return localStorage.getItem(value)
}