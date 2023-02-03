import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsData} from "../../../index";

type MyPostsProps = {
    myPostsData: MyPostsData
}

const MyPosts = (props: MyPostsProps) => {
    return (
        <div className={s.MyPosts}>
            My post
            <div>
                <div>ADD NEW POST
                    <textarea></textarea>
                    <button>ADd post</button>
                </div>

                <Post postData={props.myPostsData.PostData}/>
            </div>
        </div>
    )

}
export default MyPosts