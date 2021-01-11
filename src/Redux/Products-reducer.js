
const SET_PRODUCT = 'SET_PRODUCT'

let initialState = {
    Cars: [
        { id: 1, img: 'https://rusdtp.ru/uploads/posts/2018-03/1521184091_0.jpeg', name: 'Mark 2 НА СТОЛБЕ', price: '23000', description: 'легенда уличного дрифта, ', country: 'japan' },
        { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdoLHwpW6Bw6HBlDcwtyeSR5QR-leGnVvjw&usqp=CAU', name: 'CAMRY 3.5', price: '23000', description: 'на арабском чипе', country: 'japan' },
        { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdoLHwpW6Bw6HBlDcwtyeSR5QR-leGnVvjw&usqp=CAU', name: 'CAMRY 3.5', price: '23000', description: 'на арабском чипе', country: 'japan' },
        { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdoLHwpW6Bw6HBlDcwtyeSR5QR-leGnVvjw&usqp=CAU', name: 'CAMRY 3.5', price: '23000', description: 'на арабском чипе', country: 'japan' },
        { id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdoLHwpW6Bw6HBlDcwtyeSR5QR-leGnVvjw&usqp=CAU', name: 'CAMRY 3.5', price: '23000', description: 'на арабском чипе', country: 'japan' },
        { id: 3, img: 'https://sis-motors.ru/wp-content/uploads/2017/07/bmw_service_moscow.jpg', name: 'БНВ 5 серии', price: '0', description: 'порвало прокладку дцп,тасол пошел в масло, масло пошло в тосол, а мотор пошел нахуй', country: 'usa' }
    ]
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        default:
            return state
    }
}

export const setProduct = (product) => ({ type: SET_PRODUCT, product })

export const getProduct = () => dispatch => {

}

export default ProductReducer