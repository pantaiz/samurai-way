import React from "react";
import s from './Post.module.css';
import {PostData} from "../../../../index";


type PostProps={
    postData:Array<PostData>
}
//Типизируем наши посты

/**/


const Post = (props:PostProps) => {
    return <div>{props.postData.map(a => {
        return (
            <div className={s.item}>
                <div className={s.Header}>
                    <span className={s.AvaName}>
                <img alt={'avatar'} src={a.avatar}/>
                        <span className={s.Name}>{a.name}</span>
                        <span className={s.Nick}>{a.nick}</span></span>
                </div>

                <div className={s.PostDescription}>{a.message}</div>
                <div className={s.likes}>
                    <span className="material-symbols-outlined">favorite</span><span className={s.LikeCounts}>{a.likeCounts} </span>
                </div>
            </div>
        )
    })

    }</div>

}
export default Post