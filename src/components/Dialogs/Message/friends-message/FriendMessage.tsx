import React from 'react'
import s from './FriendMessage.module.css'
import {FriendMessageData} from "../../../../redux/dialog-reducer";


type FriendMessageProps = {
    message: Array<FriendMessageData>
}

export const FriendMessage = (props: FriendMessageProps) => {
    return (<>{props.message.map(a=>{return(


        <div key={a.id} className={s.friendMessage}>
            <div className={s.friendText}>
                <div className={s.friendName}>
                    {a.user.name}
                </div>
                <div className={s.friendMessageText}>
                    {a.message.text}
                </div>
            </div>
            <div className={s.friendTime}>
                {a.message.time}
            </div>
        </div>)})}</>
    )
}

