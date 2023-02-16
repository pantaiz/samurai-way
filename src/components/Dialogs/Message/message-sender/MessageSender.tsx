import React from 'react'
import s from './MessageSender.module.css'

export const MessageSender = () => {
    let newMessageElement=React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        let newMessag=newMessageElement.current?.value

    }
    return (
        <>
            <div className={s.sendForm}>
                <textarea
                    ref={newMessageElement}
                    placeholder={'Type your message'}
                />
                <button className={s.button}>
                    Send
                </button>
            </div>
        </>
    )
}
