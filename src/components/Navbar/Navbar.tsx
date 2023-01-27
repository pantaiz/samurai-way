import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return( <nav className={classes.nav}>
        <div><a className={classes.item} href={'/Profile'}>Profile</a></div>
        <div><a className={classes.item} href={'/Dialogs'}>Messages</a></div>
        <div><a className={classes.item} href={'/News'}>News</a></div>
        <div><a className={classes.item} href={'/Music'}>Music</a></div>
        <div><a className={classes.item} href={'/Settings'}>Settings</a></div>
    </nav>)

}
export default Navbar