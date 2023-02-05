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
                <NavLink to={"/dialogs/" + a.id} activeClassName={s.activelink}><img src={'https://i08.fotocdn.net/s122/21f4308456162c17/user_m/2796889876.jpg'}/><span className={s.name}>{a.name}</span></NavLink></div>)
        })}</div>
    )
}
