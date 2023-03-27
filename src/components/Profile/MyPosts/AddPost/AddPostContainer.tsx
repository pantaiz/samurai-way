import React from "react";

import {AddPostData, dispatchType} from "../../../../index";
import {AddPostActionCreator, updateNewPostTextsActionCreator} from "../../../../redux/profile-reducer";
import {AddPost} from "./AddPost";
import {AppStateType, storeType} from "../../../../redux/redux-store";
import { StoreContext } from "../../../../StoreContext";


type AddPostContainerPropsType = {
/*
   AddPostData: AddPostData
    dispatch:dispatchType*/
}

export const AddPostContainer = (props: AddPostContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state=store.getState();
                const addPost = () => {
                    const action=AddPostActionCreator()
                    store.dispatch(action)
                }
                const onChangeHandler = (text:string) => {
                    const action=updateNewPostTextsActionCreator(text)
                    store.dispatch(action)
                }
            return <AddPost textareaText={state.AddPostData.newPostText} updateNEwPostText={onChangeHandler}
                     addPost={addPost}/>}

        }
        </StoreContext.Consumer>
    )
}
