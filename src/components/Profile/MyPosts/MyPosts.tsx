import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {dispatchType, MyPostsData} from "../../../index";
import { AddPost } from "./AddPost/AddPost";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {store} from "../../../redux/redux-store";

type MyPostsProps = {
    myPostsData: MyPostsData
    dispatch:dispatchType
}

const MyPosts = (props: MyPostsProps) => {
    return (
        <div className={s.MyPosts}>
                <AddPostContainer />
                <Post postData={props.myPostsData.PostData}/>
        </div>
    )
}

export default MyPosts