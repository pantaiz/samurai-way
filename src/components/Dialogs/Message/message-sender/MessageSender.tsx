import React, {ChangeEvent} from 'react'
import s from './MessageSender.module.css'

import {
    messageSenderType,
} from "../../../../redux/dialog-reducer";


export type MessageSenderProps = {
    messageSenderData: messageSenderType
    sendMessage: () => void
    updatedNewMyMessage: (text: string) => void
}
export const MessageSender = (props: MessageSenderProps) => {
    const updatedNewMyMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatedNewMyMessage(e.currentTarget.value)
    }

    const sendMessage = () => {

        props.sendMessage()
    }
    return (
        <>
            <div className={s.sendForm}>
                <textarea
                    onChange={updatedNewMyMessage}
                    placeholder={'Type your message'}
                    value={props.messageSenderData.newMyMessage}
                />
                <button onClick={sendMessage} className={s.button}>
                    Send
                </button>
            </div>
        </>
    )
}
