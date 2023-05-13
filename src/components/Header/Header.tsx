import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

type HeaderPropsType = {
    login: string | null,
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {

    console.log(props.isAuth)
    return (<header className={s.header}>

        <img alt={'logo'}
             src={'https://e7.pngegg.com/pngimages/594/603/png-clipart-graphic-design-logo-graphics-art-design-angle-poster.png'}/>
        <span>Pied Piper </span>
        {
            props.isAuth
                ? <span>{props.login}</span>
                : <NavLink to={'/login'}>
                    <button className={s.button}>Login</button>
                </NavLink>
        }

    </header>)
}
export default Header