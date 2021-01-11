import AuthorizationReducer from "./Authorization-reducer";
import ProductReducer from './Products-reducer'

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    Products: ProductReducer,
    Authorization: AuthorizationReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store