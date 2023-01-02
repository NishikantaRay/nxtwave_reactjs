const initialState = {
    user: {
        phoneNumber: "",
        password: "",
    }
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state
            }
        default:
            return state
    }
}
export default loginReducer