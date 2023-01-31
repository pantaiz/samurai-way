import React from "react";
import s from './Post.module.css';
import {PostDataProps} from "../MyPosts";

type PostProps={
    postData:Array<PostDataProps>
}

const Post = (props:PostProps) => {
    return <div>{props.postData.map(a => {
        return (
            <div className={s.item}>
                <img alt={'avatar'}
                     src={'https://i.pinimg.com/originals/dd/d7/00/ddd700a2c9a13680481c73e9b877028c.png'}/>
                {a.message}
                <div>
                    <span>{a.likeCounts} likes</span>
                </div>
            </div>
        )
    })

    }</div>

}
export default Post