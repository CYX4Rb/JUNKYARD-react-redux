import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

import ProductReducer from './Products-reducer'

const reducers = combineReducers({
    Products: ProductReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store