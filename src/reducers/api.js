const initialState = {
    api: []
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_API_DATA":
            return {
                ...state,
                api: [...state.api,action.payload]
            }
        case "Remove_API_DATA":
            return {
                ...state
            }
        default:
            return state
    }
}
export default apiReducer