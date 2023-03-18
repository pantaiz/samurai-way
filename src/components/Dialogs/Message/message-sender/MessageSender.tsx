import React, {ChangeEvent} from 'react'
import s from './MessageSender.module.css'
import {dispatchType, messageSenderType} from "../../../../index";
import {addNewMyMessageActionCreator, updatedNewMyMessageActionCreator} from "../../../../redux/dialog-reducer";



export type MessageSenderProps = {

    messageSenderData: messageSenderType
    dispatch: dispatchType
}
export const MessageSender = (props: MessageSenderProps) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = updatedNewMyMessageActionCreator(e.currentTarget.value)
        props.dispatch(action)
    }

    const sendMessage = () => {
        const action = addNewMyMessageActionCreator()
        props.dispatch(action)
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
