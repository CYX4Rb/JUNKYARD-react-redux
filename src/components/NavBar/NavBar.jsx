import style from './NavBar.module.scss'
import React from 'react'
import { useForm } from 'react-hook-form'

const NavBar = ({ setSorting, clearSorting }) => {

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
                <input className={style.navbar__select_country} name='minPrice' ref={register} />
            </div>
            <div>
                <p>max Price</p>
                <input className={style.navbar__select_country} name='maxPrice' ref={register} />
            </div>
            <input type="submit" />
            <button onClick={clearSorting}>clear</button>
        </div>
    </form>
}

export default NavBar