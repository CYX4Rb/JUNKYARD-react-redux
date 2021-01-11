import style from './NavBar.module.scss'
import React from 'react'
import { useForm } from 'react-hook-form'

const NavBar = ({setSorting}) => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
       setSorting(data)
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.navbar}>
            <select className={style.navbar__select_country} name='country' ref={register} >
                <option value='all'>all</option>
                <option value="Europa">Europa</option>
                <option value="Japan">Japan</option>
                <option value="Usa">Usa</option>
            </select>
            <div className={!!errors.firstYear && style.navbar__year}>
                <p>Enter min year</p>
                <input name='firstYear' ref={register({ min: 1900, max: 2021 })} />
            </div>
            <div className={!!errors.lastYear && style.navbar__year}>
                <p>Enter last year</p>
                <input name='lastYear' ref={register({ min: 1900, max: 2021 })} />
            </div>
            <div>
                <p>min Price</p>
                <select className={style.navbar__select_country} name='minPrice' ref={register} >
                    <option value='no_limit'>all</option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                    <option value="100000">100000</option>
                </select>
            </div>
            <div>
                <p>max Price</p>
                <select className={style.navbar__select_country} name='maxPrice' ref={register} >
                    <option value='1000'>1000</option>
                    <option value="10000">10000</option>
                    <option value="50000">50000</option>
                    <option value="no_limit">all</option>
                </select>
            </div>
            <input type="submit" />
        </div>
    </form>

}

export default NavBar