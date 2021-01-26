import authorizationReducer from "./Authorization-reducer";
import productReducer from './Products-reducer'
import navBarReducer from './NavBar-reducer'

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    products: productReducer,
    authorization: authorizationReducer,
    navBar: navBarReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store