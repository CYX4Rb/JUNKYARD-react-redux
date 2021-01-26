import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { setSorting, clearSorting } from '../../Redux/NavBar-reducer'
import SelectedFilters from './SelectedFilters'

class ContainerNavBar extends Component {
    render() {
        return <div>
            <NavBar
                setSorting={this.props.setSorting}
                clearSorting={this.props.clearSorting}
                navBar={this.props.navBar}
            />
            <SelectedFilters
                navBar={this.props.navBar}
            />
        </div>
    }
}
const mapStateToProps = state => ({
    navBar: state.navBar
})
export default connect(mapStateToProps, { setSorting, clearSorting })(ContainerNavBar)