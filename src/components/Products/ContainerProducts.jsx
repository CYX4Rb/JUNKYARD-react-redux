import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContainerNavBar from '../NavBar/ContainerNavBar'

import Product from './Product/Product'
import style from './Products.module.scss'

class ContainerProducts extends Component {

    render() {
        return <div className = {style.container} >
            <ContainerNavBar  />
            <div className={style.content}>
                {this.props.product
                    .map(p =>
                        (<Product key={p.id} product={p} />))}
            </div >
        </div>

    }

}

const mapStateToProps = (state) => ({
    product: state.products.cars
})
export default connect(mapStateToProps, {})(ContainerProducts)