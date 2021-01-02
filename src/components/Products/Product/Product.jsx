import React from 'react'
import style from '../Products.module.scss'

const Product = ({product}) => {
    return <div className = {style.product} >
        <h3>{product.name}</h3>
        <img src = {product.img} alt="ни че нет"/>
        <h4>Price: {product.price}</h4>
        <p>{product.description}</p>
    </div>
}

export default Product