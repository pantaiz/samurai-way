import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img alt={'avatar'} src={'https://i.pinimg.com/originals/e4/ed/eb/e4edebcd1a0cd89a2f237762978b199d.jpg'}/>
            post 1
            <div><span>like</span></div>
        </div>
    )

}
export default Post