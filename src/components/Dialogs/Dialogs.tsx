import React from "react";
import s from './Dialogs.module.css';
import {DialigsItem} from "./DialigsItem/DialigsItem";
import { Message } from "./Message/Message";

export type  DialogsDataProps={
    id:number,
    name:string
}
export type  MessageDataProps={
    id:number,
    text:string
}




const Dialogs = () => {
    let dialogsDataArr: Array<DialogsDataProps> = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Marharita"},
        {id: 3, name: "Roma"},
        {id: 4, name: "Vitalya"},
        {id: 5, name: "Artem"},
        {id: 6, name: "Jenya"},
    ]
    let messageDataArr: Array<MessageDataProps> = [
        {id: 1, text: "Hi"},
        {id: 2, text: "Darova chel"},
        {id: 3, text: "It's test messag"},
        {id: 4, text: "Ti cho bla?"},
        {id: 5, text: "Vilkoy v glaz?"},
        {id: 6, text: "Aga"},
    ]

    return (<div className={s.dialogs}>
                <DialigsItem dialogsData={dialogsDataArr}/>
                <Message messageData={messageDataArr}/>
        </div>
    )

}
export default Dialogs