import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import {rerenderPost} from "./render";


export type  DialogsItemDataType = {
    id: number,
    name: string
    avatar: string
}//Типизируем наши входные диалоги
export type  MyMessageData = {
    id: number,
    user: {
        name: string
    },
    message: {
        text: string
        time: string
    },
}
export type MessageDataType = {
    friendMessage: Array<FriendMessageData>,
    myMessage: Array<MyMessageData>
}
export type FriendMessageData = {
    id: number,
    user: {
        name: string
    },
    message: {
        text: string
        time: string
    },
}
//Типизируем наши сообщения
export type DialogsDataType = {
    messageData: MessageDataType,
    dialogsItemData: Array<DialogsItemDataType>
}
export type AddPostData={
    newPostText:string,
}
export type MyPostsData = {
    PostData: Array<PostData>,
    AddPostData:AddPostData
}
export type ProfileDataType = {
    MyPostsData: MyPostsData
    ProfileInfo: ProfileinfoData
}
export type ProfileinfoData = {
    avatar: string,
    id: number,
    name: string,
    nick: string,
    description: string,
    followers: number,
    following: number,
}
export type PostData = {
    id: string,
    avatar: string,
    name: string,
    nick: string
    message: string,
    likeCounts: number
}//Типизируем наши посты
export type StateType = {
    ProfileData: ProfileDataType,
    DialogsData: DialogsDataType,

}


 rerenderPost(state)