import React, { Component } from 'react'
import { connect } from 'react-redux'

import Authorization from './Authorization'
import {getAuthorization} from '../../Redux/Authorization-reducer'

class ContainerAuthorization extends Component{
    render(){
        return <Authorization getAuthorization = {this.props.getAuthorization}/>
    }
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {getAuthorization})(ContainerAuthorization)