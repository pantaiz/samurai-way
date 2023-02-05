import s from "./Message.module.css";
import React from "react";

import { FriendMessage } from "./friends-message/FriendMessage";
import { MyMessage } from "./message/MyMessage";
import { MessageSender } from "./message-sender/MessageSender";
import {MessageDataType} from "../../../index";

export type MessageProps = {
    messageData:MessageDataType
}
export const Message = (props: MessageProps) => {
    return (
        <div id={'messages'} className={s.message}>
                    <MyMessage message={props.messageData.myMessage}/>
                    <FriendMessage message={props.messageData.friendMessage}/>
                <MessageSender/>
        </div>
    )
}


