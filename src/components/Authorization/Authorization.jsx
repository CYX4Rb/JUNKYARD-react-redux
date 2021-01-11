import style from './Authorization.module.scss'
import React from 'react'
import { useForm } from 'react-hook-form';

const Authorization = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        props.getAuthorization(data)
       
    }
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
            ref={register({ required: true, maxLength: 16 })}
        />
        {(!!errors.password || !!errors.name) && <p>name or password is required!</p>}
        <input type="submit" />
    </form>
}

export default Authorization