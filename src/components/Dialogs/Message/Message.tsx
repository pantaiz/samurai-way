import s from "./Message.module.css";
import React from "react";
import {MessageDataProps} from "../Dialogs";

export type MessageProps = {
    messageData: Array<MessageDataProps>
}

export const Message = (props: MessageProps) => {
    return <div>{props.messageData.map(a => {
        return (<div className={s.message}>{a.text}</div>)
    })}</div>
}
