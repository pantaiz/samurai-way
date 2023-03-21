import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {dispatchType, MyPostsData} from "../../../index";
import { AddPost } from "./AddPost/AddPost";

type MyPostsProps = {
    myPostsData: MyPostsData
    dispatch:dispatchType
}
//adadasda
const MyPosts = (props: MyPostsProps) => {
    return (
        <div className={s.MyPosts}>
                <AddPost dispatch={props.dispatch}
                         AddPostData={props.myPostsData.AddPostData}/>
                <Post postData={props.myPostsData.PostData}/>
        </div>
    )

}

