import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";


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
export type ActtionType = updatedNewMyMessageType | addNewMyMessageType | addPostType | updateNewPostTextsType
export type updatedNewMyMessageType = {
    type: 'updated-New-My-Message'
    newMyMessage: string
}
export type addNewMyMessageType = {
    type: 'add-New-My-Message'
}
export type addPostType = {
    type: 'add-Post'

}
export type updateNewPostTextsType = {
    type: 'update-New-Post-Texts'
    newPostText: string
}

export type dispatchType=(actrion: ActtionType) => void
export type PostData = {
    id: string,
    avatar: string,
    name: string,
    nick: string
    message: string,
    likeCounts: number
}//Типизируем наши посты
export type StateType = ReturnType<typeof store.getState>
/*export type StateType = {
    ProfileData: ProfileDataType,
    DialogsData: DialogsDataType,

}*/
export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (callback: () => void) => void
    _onChange: () => void
    dispatch: dispatchType
}
export type stateType=ReturnType<typeof store.getState>
let rerenderPost = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)}
                 state={store.getState()}/>
        </BrowserRouter>,
        document.getElementById('root'))
}
rerenderPost(store.getState())
store.subscribe(()=> {
    rerenderPost(store.getState())
})