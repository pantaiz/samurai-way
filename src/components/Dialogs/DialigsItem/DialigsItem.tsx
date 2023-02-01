import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsDataProps} from "../Dialogs";

type DialigsProps = {
    dialogsData: Array<DialogsDataProps>
}

export const DialigsItem = (props: DialigsProps) => {
    return (
        <div className={s.dialogsItems}>{props.dialogsData.map(a => {
            return (<div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + a.id} activeClassName={s.activelink}>{a.name}</NavLink></div>)
        })}</div>
    )
}
