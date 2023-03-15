import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";


export type messageSenderType = {
    newMyMessage: string
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
    messageSender: messageSenderType
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
export type AddPostData = {
    newPostText: string,
}
export type MyPostsData = {
    PostData: Array<PostData>,
    AddPostData: AddPostData
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
export type StoreType = {
    _state: StateType
    getState: () => StateType
    updatedNewMyMessage: (newMyMessage: string) => void
    addNewMyMessage: () => void
    addPost: () => void
    updateNewPostTexts: (newPostText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
    rerenderPost: (state: StateType) => void
}

let rerenderPost = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App updatedNewMyMessage={store.updatedNewMyMessage.bind(store)}
                 addNewMyMessage={store.addNewMyMessage.bind(store)}
                 updateNewPostTexts={store.updateNewPostTexts.bind(store)}
                 state={store.getState()} addPost={store.addPost.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'))
}
rerenderPost(store)
//store.subscribe(rerenderPost)