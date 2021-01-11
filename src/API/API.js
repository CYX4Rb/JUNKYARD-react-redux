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

export const UsersAuthorized  = {
    addNewUser({name, password}){
       return axios.post('localhost:8080/v1/user/signup', 
       {withCredentials: true}, 
       {name: name, password: password})
    }
}