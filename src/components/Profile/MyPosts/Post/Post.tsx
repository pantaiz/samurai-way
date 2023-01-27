import React from "react";
import s from './Post.module.css';

type PostProps={
    message:string
    likeCounts:number
}

const Post = (props:PostProps) => {
    return (
        <div className={s.item}>
            <img alt={'avatar'} src={'https://i.pinimg.com/originals/dd/d7/00/ddd700a2c9a13680481c73e9b877028c.png'}/>
            {props.message}
            <div>
                <span>{props.likeCounts} like</span>
            </div>
        </div>
    )

}
export default Post