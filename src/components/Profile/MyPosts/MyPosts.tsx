import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postDataArr: Array<PostDataProps> = [
    {id: 1, message: "It\'s my first comment", likeCounts: 15},
    {id: 2, message: "Hi, how are you? ", likeCounts: 20},
]
export type PostDataProps = {
    id: number,
    message: string,
    likeCounts: number
}

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            My post
            <div>
                <textarea></textarea>
                <button>ADd post</button>
                <div className={s.posts}>New Posts</div>
                <Post postData={postDataArr}/>
            </div>
        </div>
    )

}
export default MyPosts