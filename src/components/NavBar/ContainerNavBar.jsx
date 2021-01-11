import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import {setSorting} from '../../Redux/NavBar-reducer'

class ContainerNavBar extends Component{
    render(){
        return <NavBar setSorting = {this.props.setSorting}/>
    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {setSorting})(ContainerNavBar)