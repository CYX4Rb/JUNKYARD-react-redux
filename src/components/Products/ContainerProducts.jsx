import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Product from './Product/Product'
import style from './Products.module.scss'

class ContainerProducts extends Component {

    render() {
        return <div className = {style.container} >
            <NavBar />
            <div className={style.content}>
                {this.props.product
                    .map(p =>
                        (<Product key={p.id} product={p} />))}
            </div >
        </div>

    }

}

const mapStateToProps = (state) => ({
    product: state.Products.Cars
})
export default connect(mapStateToProps, {})(ContainerProducts)