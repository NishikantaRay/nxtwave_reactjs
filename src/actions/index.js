// This file contains all the actions that are used in the application

// Action for login
export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

// Action for logout
export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: {
            phoneNumber: "",
            password: "",
        }
    }
}

// Action for getting the data from the API
export const getApiData = (data) => {
    return {
        type: 'GET_API_DATA',
        payload: data
    }
}