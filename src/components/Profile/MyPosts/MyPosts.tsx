import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {PostData} from "../../../redux/profile-reducer";

type MyPostsProps = {
    postData:Array<PostData>
}

const MyPosts = (props: MyPostsProps) => {
    return (
        <div className={s.MyPosts}>
                <AddPostContainer />
                <Post postData={props.postData}/>
        </div>
    )
}

export default MyPosts