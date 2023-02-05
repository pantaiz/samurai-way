import s from "./Message.module.css";
import React from "react";
import {MessageDataType} from "../../../index";
import { FriendMessage } from "./friends-message/FriendMessage";
import { MyMessage } from "./message/MyMessage";
import { MessageSender } from "./message-sender/MessageSender";
export type MessageProps = {
    messageData: Array<MessageDataType>
}
/*



export const Message = (props: MessageProps) => {
    return <div className={s.messages}>
            {props.messageData.map(a => {
                return<div className={s.message}>{a.text}</div>
            })}
        </div>

}
*/
export type MessageType = {
    id: number,
    user: {
        avatar: string,
        name: string
    },
    message: {
        text: string
        time: string
    },
}
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: '#', // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsomsome textsome textsome texe textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: "#", // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'extsome textsomsome textsome textsome texe textsome textsome textsomsome textsome textsome texe textsome t', // можно менять
        time: '22:00', // можно менять
    },
}
export const Message = (props: MessageProps) => {
    return (
        <div id={'messages'} className={s.message}>
                    <MyMessage message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                <MessageSender M={Message}/>
        </div>
    )
}


