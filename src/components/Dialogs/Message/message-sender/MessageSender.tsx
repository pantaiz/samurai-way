import React from 'react'
import s from './MessageSender.module.css'

export const MessageSender = () => {

    return (
        <>
            <div className={s.sendForm}>
                <textarea
                    placeholder={'Type your message'}
                />
                <button className={s.button}>
                    Send
                </button>
            </div>
        </>
    )
}
