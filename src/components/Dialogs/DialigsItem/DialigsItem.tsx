import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsItemDataType} from "../../../index";


type DialigsItemProps = {
    dialogsData: Array<DialogsItemDataType>
}

export const DialigsItem = (props: DialigsItemProps) => {
    return (
        <div className={s.dialogsItems}>{props.dialogsData.map(a => {
            return (<div key={a.id} className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + a.id} activeClassName={s.activelink}><img src={a.avatar}/><span className={s.name}>{a.name}</span></NavLink></div>)
        })}</div>
    )
}
