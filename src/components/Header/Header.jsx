import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

import shopping_cart from '../../assets/shopping-cart.svg'
import liked from '../../assets/heart.svg'
import settings from '../../assets/settings-1.svg'
import search from '../../assets/magnifying-glass.svg'
import authorized from '../../assets/logout.svg'

const Header = (props) => {
    return <div className={style.header} >
        <NavLink to='/'>
            <h1>JUNKYARD</h1>
        </NavLink>
        <div className={style.header__input_search} >
            <input type='search' />
            <img src = {search}  alt = ""/>
        </div>
        <div className={style.buttons} >
            <div className={style.buttons__span}>
                <img src={settings} alt='' />
                <span> compare</span>
            </div>
            <div className={style.buttons__span}>
                <img src={liked} alt='' />
                <span> liked</span>
            </div>
            <div className={style.buttons__span}>
                <img src={shopping_cart} alt='' />
                <span> basket</span>
            </div>
        </div>
        <NavLink to = '/authorized'>
            <img src = {authorized} alt = ''/>
        </NavLink>
        {/* <NavLink to='/Products' className={style.NavLink} >Products</NavLink> */}
    </div>
}

export default Header