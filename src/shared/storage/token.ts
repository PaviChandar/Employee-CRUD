export const token = localStorage.getItem('token')
export const login = localStorage.getItem('login')

export const localStorageKey = (value: string) => {
    return localStorage.getItem(value)
}