import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                    <NavLink to={"/dialogs/1"} activeClassName={s.activelink}>Dimych</NavLink> </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/2"} activeClassName={s.activelink}>Marharita</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/3"} activeClassName={s.activelink}>Roma</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/4"} activeClassName={s.activelink}>Vitalya</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/5"} activeClassName={s.activelink}>Artem</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/6"} activeClassName={s.activelink}>Jenya</NavLink></div>
            </div>
        <div className={s.messages}>
            <div className={s.message}>Hiasd</div>
            <div className={s.message+' '+s.mymessage}>Darova chel</div>
            <div className={s.message}>It's test message</div>
            <div className={s.message+' '+s.mymessage}>Ti cho blya?</div>
            <div className={s.message}>Vilkoy v glaz?</div>
            <div className={s.message+' '+s.mymessage}>Aga</div>
        </div>
        </div>
    )

}
export default Dialogs