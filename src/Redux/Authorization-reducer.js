import { UsersAuthorized } from "../API/API"

const SET_AUTHORIZED = 'SET_AUTHORIZED'

let initialState = {
    user: {},
    authorized: false
}

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZED:
            return {
                ...state,
                user: action.response,
                authorized: true
            }
        default:
            return state
    }
}

export const setAuthorization = (response) => ({ type: SET_AUTHORIZED, response })

export const getAuthorization = (data) => async dispatch => {
    let response = await UsersAuthorized.addNewUser(data)
    if(response === data){
        dispatch(setAuthorization(response))
    } 
}

export default authorizationReducer