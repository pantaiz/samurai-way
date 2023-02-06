import React from "react";
import s from './AddPosts.module.css';


export const AddPost = () => {
    return (
        <div className={s.Main}>
            <div className={s.textInput}><textarea className={s.textarea} placeholder={'What\'s new with you?'}></textarea></div>
            <button className={s.button}>Publish</button>
        </div>
    )
}