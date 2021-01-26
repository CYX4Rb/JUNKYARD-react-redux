import React from 'react'
import style from './NavBar.module.scss'

const SelectedFilters = ({navBar}) => {
    return <div className = {style.SelectedFilters}>
        {navBar.country && <div className = {style.SelectedFilters__element}>{navBar.country}</div>}
        {navBar.firstYear && <div className = {style.SelectedFilters__element}>{navBar.firstYear}</div>}
        {navBar.lastYear && <div className = {style.SelectedFilters__element}>{navBar.lastYear}</div>}
        {navBar.minPrice && <div className = {style.SelectedFilters__element}>{navBar.minPrice}</div>}
    </div>
}

export default SelectedFilters