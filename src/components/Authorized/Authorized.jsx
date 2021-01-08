import style from './Authorized.module.scss'
import React from 'react'
import { useForm } from 'react-hook-form';

const Authorized = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
       
    }
    /* return <div className = {style.Authorized}>
        <input placeholder = 'login' ></input>
        <input placeholder = 'password' type = 'password' ></input>
        <button>sign up</button>
    </div> */
    console.log(errors)
    return <form onSubmit={handleSubmit(onSubmit)} className={style.Authorized} >
        <label>Name</label>
        <input
            name='name'
            ref={register({ required: true, maxLength: 30 })}
        />
        <label>Password</label>
        <input
            name='password'
            type='password'
            ref={register({ required: true, maxLength: 10 })}
        />
        {(!!errors.password || !!errors.name) && <p>name or password is required!</p>
        }
        <input type="submit" />
    </form>
}

export default Authorized