import React, {useEffect, useRef, useState} from 'react'
import { message0 } from '../Message'
import s from './MessageSender.module.css'

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
export const MessageSender = (props: any) => {

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
