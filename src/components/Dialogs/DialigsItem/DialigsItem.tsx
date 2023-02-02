import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsItemDataType} from "../../../index";


type DialigsProps = {
    dialogsData: Array<DialogsItemDataType>
}

export const DialigsItem = (props: DialigsProps) => {
    return (
        <div className={s.dialogsItems}>{props.dialogsData.map(a => {
            return (<div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + a.id} activeClassName={s.activelink}>{a.name}</NavLink></div>)
        })}</div>
    )
}
