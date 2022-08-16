import handleCart from './handleCart'
import { combineReducers } from 'redux'
import auth from './auth'

const rootReducers = combineReducers({
    handleCart,
    auth,
})

export default rootReducers;