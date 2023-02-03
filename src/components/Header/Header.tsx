import React from "react";
import s from './Header.module.css';

const Header = () => {
    return( <header className={s.header}>

        <img alt={'logo'} src={'https://e7.pngegg.com/pngimages/594/603/png-clipart-graphic-design-logo-graphics-art-design-angle-poster.png'}/> <span>SOCIAL NETWORK</span>
        <button className={s.button}>Login</button>
    </header>)
}
export default Header