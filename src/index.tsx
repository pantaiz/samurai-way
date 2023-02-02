import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

let state: StateType = {
    ProfileData: {
        MyPostsData: {
            PostData: [
                {id: 1, message: "It\'s my first comment", likeCounts: 15},
                {id: 2, message: "Hi, how are you? ", likeCounts: 20},
            ],
            Mypost: []
        },
    },
    DialogsData: {
        messageData: [
            {id: 1, text: "Hi"},
            {id: 2, text: "Darova chel"},
            {id: 3, text: "It's test messag"},
            {id: 4, text: "Ti cho bla?"},
            {id: 5, text: "Vilkoy v glaz?"},
            {id: 6, text: "Aga"},
        ],
        dialogsItemData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Marharita"},
            {id: 3, name: "Roma"},
            {id: 4, name: "Vitalya"},
            {id: 5, name: "Artem"},
            {id: 6, name: "Jenya"},
        ]

    },
}
ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);