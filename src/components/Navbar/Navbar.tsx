import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return( <nav className={s.nav}>
        <div className={s.item}><NavLink activeClassName={s.activelink} to={'/Profile'}>Profile</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink}  to={'/Dialogs'}>Messages</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink}  to={'/News'}>News</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink}  to={'/Music'}>Music</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink}  to={'/Settings'}>Settings</NavLink></div>
    </nav>)

}
export default Navbar