import s from "./Message.module.css";
import React from "react";
import {MessageDataType} from "../../../index";


export type MessageProps = {
    messageData: Array<MessageDataType>
}

export const Message = (props: MessageProps) => {
    return <div className={s.messages}>
            {props.messageData.map(a => {
                return<div className={s.message}>{a.text}</div>
            })}
        </div>

}
