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
                <Post likeCounts={15} message={'It\'s my first comment'}/>
                <Post likeCounts={20}  message={'Hi, how are you? '}/>
            </div>
        </div>
    )

}
export default MyPosts