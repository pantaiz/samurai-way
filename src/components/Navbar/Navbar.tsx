import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return (<nav className={s.nav}>
        <div className={s.item}><NavLink activeClassName={s.activelink} to={'/Profile'}><span className="material-symbols-outlined">account_circle</span><span className={s.text}> PROFILE</span></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink} to={'/Dialogs'}><span className="material-symbols-outlined">mail</span><span className={s.text}>MESSAGES</span></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink} to={'/News'}><span className="material-symbols-outlined">newspaper</span><span className={s.text}>NEWS</span></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink} to={'/Music'}><span className="material-symbols-outlined">queue_music</span><span className={s.text}>MUSIC</span></NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.activelink} to={'/Settings'}><span className="material-symbols-outlined">settings</span><span className={s.text}>SETTINGS</span></NavLink></div>
    </nav>)

}
export default Navbar