import React from 'react'
import s from './MyMessage.module.css'
import {MessageType} from "../Message";

export type MessagePropsType = {
    message:MessageType
}
export const MyMessage = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
                <div className={s.text}>
                    <div className={s.name}>
                        {props.message.user.name}
                    </div>
                    <div className={s.messageText}>
                        {props.message.message.text}
                    </div>
                </div>
            <div className={s.time}>
                {props.message.message.time}
            </div>
        </div>
    )
}
