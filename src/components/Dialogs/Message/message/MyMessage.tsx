import React from 'react'
import s from './MyMessage.module.css'
import {MyMessageData} from "../../../../index";

export type MessagePropsType = {
    message:Array<MyMessageData>
}
export const MyMessage = (props: MessagePropsType) => {
    return (<>{props.message.map(a=>{return(
        <div key={a.id} className={s.message}>
                <div className={s.text}>
                    <div className={s.name}>
                        {a.user.name}
                    </div>
                    <div className={s.messageText}>
                        {a.message.text}
                    </div>
                </div>
            <div className={s.time}>
                {a.message.time}
            </div>
        </div>)})}</>
    )
}
