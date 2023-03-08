import React from 'react'
import s from './MessageSender.module.css'
import {messageSenderType} from "../../../../index";


export type MessageSenderProps = {
    addNewMyMessage: () => void
    messageSenderData: messageSenderType
    updatedNewMyMessage: (newMyMessage: string) => void
}
export const MessageSender = (props: MessageSenderProps) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = () => {
        newMessageElement.current && props.updatedNewMyMessage(newMessageElement.current?.value)
    }

    const sendMessage = () => {
        props.addNewMyMessage()
    }
    return (
        <>
            <div className={s.sendForm}>
                <textarea
                    onChange={onChangeHandler}
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
