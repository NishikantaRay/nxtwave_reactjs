export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: {
            phoneNumber: "",
            password: "",
        }
    }
}
export const getApiData = (data) => {
    return {
        type: 'GET_API_DATA',
        payload: data
    }
}