import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsData} from "../../../index";
import { AddPost } from "./AddPost/AddPost";

type MyPostsProps = {
    myPostsData: MyPostsData
}

const MyPosts = (props: MyPostsProps) => {
    return (
        <div className={s.MyPosts}>
                <AddPost/>
                <Post postData={props.myPostsData.PostData}/>
        </div>
    )

}
export default MyPosts