import React from "react";
import s from './Header.module.css';

const Header = () => {
    return( <header className={s.header}>

        <img alt={'logo'} src={'./logo.png'}/> <span>IVAN SVITICH SOCIAL NETWORK</span>

    </header>)
}
export default Header