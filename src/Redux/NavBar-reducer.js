
const SET_SORTING = 'SET_SORTING'
const CLEAR_SORTING = 'CLEAR_SORTING'

let initialState = {
    country: '',
    firstYear: '',
    lastYear: '',
    minPrice: '',
    maxPrice: ''
}

const navBarReducer = (state = initialState, action) => {
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
        case CLEAR_SORTING:
            return {
                ...state,
                country: '',
                firstYear: '',
                lastYear: '',
                minPrice: '',
                maxPrice: ''
            }
        default:
            return state
    }
}

export const setSorting = (data) => ({ type: SET_SORTING, data })

export const clearSorting = () => ({ type: CLEAR_SORTING })

export default navBarReducer
