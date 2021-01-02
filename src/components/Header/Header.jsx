import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

const Header = (props) => {
    return <div className={style.header} >
        <NavLink to='/Home'>
            <h1>Online-store</h1>
        </NavLink>
        <input type='search' className={style.header__input_search} />
        <div className={style.buttons} >
            <button className={style.buttons__button} >compare</button>
            <button className={style.buttons__button} >licked</button>
            <button className={style.buttons__button} >basket</button>
        </div>
        <NavLink to='/Products' >Products</NavLink>
    </div>
}

export default Header