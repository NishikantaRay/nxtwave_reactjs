import loginReducer from './login'
import apiReducer from './api'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    api: apiReducer,
    login: loginReducer
    
})

export default allReducers