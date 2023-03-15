import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, addNewMyMessage, updatedNewMyMessage, updateNewPostTexts, subscribe} from "./redux/state";
import './index.css';
import {state} from './redux/state';
import {BrowserRouter} from "react-router-dom";


export type messageSenderType={
    newMyMessage:string
}
export type  DialogsItemDataType = {
    id: number,
    name: string
    avatar: string
}//Типизируем наши входные диалоги
export type  MyMessageData = {
    id: string,
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
    messageSender:messageSenderType
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


let rerenderPost =(states:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App updatedNewMyMessage={updatedNewMyMessage} addNewMyMessage={addNewMyMessage}
                 updateNewPostTexts={updateNewPostTexts} state={states} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root'))
}
 rerenderPost(state)
 subscribe(rerenderPost)