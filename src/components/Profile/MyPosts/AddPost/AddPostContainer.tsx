import React from "react";

import {AddPostData, dispatchType} from "../../../../index";
import {AddPostActionCreator, updateNewPostTextsActionCreator} from "../../../../redux/profile-reducer";
import {AddPost} from "./AddPost";
import {AppStateType} from "../../../../redux/redux-store";


type AddPostContainerPropsType = {
store:AppStateType
  /*  AddPostData: AddPostData
    dispatch:dispatchType*/
}

export const AddPostContainer = (props: AddPostContainerPropsType) => {
    const addPost = () => {
        const action=AddPostActionCreator()
        props.store.di
    }
    const onChangeHandler = (text:string) => {
        const action=updateNewPostTextsActionCreator(text)
        props.dispatch(action)assd
    }
    return (
            <AddPost textareaText={props.AddPostData.newPostText} updateNEwPostText={onChangeHandler} addPost={addPost}/>
    )
}
