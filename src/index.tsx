import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redux/state';

export type  DialogsItemDataType = {
    id: number,
    name: string
}//Типизируем наши входные диалоги
export type  MessageDataType = {
    id: number,
    text: string
}//Типизируем наши сообщения
export type DialogsDataType = {
    messageData: Array<MessageDataType>,
    dialogsItemData: Array<DialogsItemDataType>
}
export type MyPostsData = {
    PostData: Array<PostData>,
    Mypost: any[]
}
export type ProfileDataType = {
    MyPostsData: MyPostsData
}
export type PostData = {
    id: number,
    message: string,
    likeCounts: number
}//Типизируем наши посты
export type StateType = {
    ProfileData: ProfileDataType,
    DialogsData: DialogsDataType,

}


ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);