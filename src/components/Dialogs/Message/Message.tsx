import s from "./Message.module.css";
import React from "react";

import { FriendMessage } from "./friends-message/FriendMessage";
import { MyMessage } from "./message/MyMessage";
import { MessageSender } from "./message-sender/MessageSender";
import {MessageDataType} from "../../../redux/dialog-reducer";


export type MessageProps = {
    messageData:MessageDataType
    sendMessage: (message:string) => void
}

export const Message = (props: MessageProps) => {
    return (
        <div id={'messages'} className={s.message}>

                    <FriendMessage message={props.messageData.friendMessage}/>
            <MyMessage message={props.messageData.myMessage}/>
                <MessageSender messageSenderData={props.messageData.messageSender} sendMessage={props.sendMessage} />
        </div>
    )
}


