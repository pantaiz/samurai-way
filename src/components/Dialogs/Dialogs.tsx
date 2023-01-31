import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

type DialigsItemProps={
    name:string
    id:number
}

const DialigsItem = (props:DialigsItemProps) => {
    return <div className={s.dialog+' '+s.active}>
        <NavLink to={"/dialogs/"+props.id} activeClassName={s.activelink}>{props.name}</NavLink> </div>
}
type MessageProps={
    text:string
    mymessage?:string
}
const Message = (props:MessageProps) => {
   return <div className={s.message+" "+props.mymessage}>{props.text}</div>
}
const Dialogs = () => {
    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialigsItem id={1} name={"Dimych"}/>
                <DialigsItem id={2} name={"Marharita"}/>
                <DialigsItem id={3} name={"Roma"}/>
                <DialigsItem id={4} name={"Vitalya"}/>
                <DialigsItem id={5} name={"Artem"}/>
                <DialigsItem id={6} name={"Jenya"}/>
            </div>
        <div className={s.messages}>
            <Message text={"Hi"} />
            <Message text={"Darova chel"} mymessage={s.mymessage}/>
            <Message text={"It's test message"} />
            <Message text={"Ti cho bla?"} mymessage={s.mymessage}/>
            <Message text={"Vilkoy v glaz?"}/>
            <Message text={"Aga"} mymessage={s.mymessage}/>
        </div>
        </div>
    )

}
export default Dialogs