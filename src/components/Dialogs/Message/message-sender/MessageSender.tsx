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
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const updatedNewMyMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*const action = updatedNewMyMessageActionCreator(e.currentTarget.value)
        props.dispatch(action)*/
        props.updatedNewMyMessage(e.currentTarget.value)
    }

    const sendMessage = () => {
        /*const action = addNewMyMessageActionCreator()
        props.dispatch(action)*/
        props.sendMessage()
    }
    return (
        <>
            <div className={s.sendForm}>
                <textarea
                    onChange={updatedNewMyMessage}
                    ref={newMessageElement}
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
