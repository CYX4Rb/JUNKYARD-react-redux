import 'axios'
import axios from 'axios'

export const ProductAPI = {
    getProduct(){
        return axios.get()
    },
    addProduct(){
        return axios.get()
    }
}

export const UsersAuth  = {
    addNewUser(name, password){
        axios.pull('localhost:8080/v1/user/signup', {name, password})
    }
}