import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../Message";

type FriendMessageProps = {
    message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
export const FriendMessage = (props: FriendMessageProps) => {
    return (
        <div className={s.friendMessage}>
            <div className={s.friendText}>
                <div className={s.friendName}>
                    {props.message.user.name}
                </div>
                <div className={s.friendMessageText}>
                    {props.message.message.text}
                </div>
            </div>
            <div className={s.friendTime}>
                {props.message.message.time}
            </div>
        </div>
    )
}

