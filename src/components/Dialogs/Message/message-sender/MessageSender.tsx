import React from 'react'
import s from './MessageSender.module.css'
import {dispatchType, messageSenderType} from "../../../../index";


export type MessageSenderProps = {

    messageSenderData: messageSenderType
    dispatch:dispatchType
}
export const MessageSender = (props: MessageSenderProps) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = () => {
        newMessageElement.current &&props.dispatch({type:"updated-New-My-Message",newMyMessage:newMessageElement.current?.value})
    }

    const sendMessage = () => {

        props.dispatch({type:"add-New-My-Message"})
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
