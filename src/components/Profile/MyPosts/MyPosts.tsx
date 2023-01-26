import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>ADd post</button>
                <div className={s.posts}>New Post</div>
                <Post/>
                <Post/>
            </div>
        </div>
    )

}
export default MyPosts