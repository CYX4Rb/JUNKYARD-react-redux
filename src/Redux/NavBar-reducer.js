
const SET_SORTING = 'SET_SORTING'

let initialState = {
    country: '',
    firstYear: '',
    lastYear: '',
    minPrice: '',
    maxPrice: ''
}

const AuthorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORTING:
            return {
                ...state,
                country: action.data.country,
                firstYear: action.data.firstYear,
                lastYear: action.data.lastYear,
                minPrice: action.data.minPrice,
                maxPrice: action.data.maxPrice
            }
        default:
            return state
    }
}

export const setSorting = (data) => ({ type: SET_SORTING, data })


export default AuthorizationReducer
