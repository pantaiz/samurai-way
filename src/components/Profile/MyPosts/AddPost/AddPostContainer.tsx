import React from "react";
import {
    AddPostActionCreator,
    updateNewPostTextsActionCreator
} from "../../../../redux/profile-reducer";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../../redux/redux-store";


type AddPostStateToPropsType = {
    textareaText: string
}
type AddPostDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type AddPostPropsType = AddPostDispatchToPropsType & AddPostStateToPropsType


const AddPostStateToProps = (state: AppStateType): AddPostStateToPropsType => {
    return (
        {
            textareaText: state.profileReducer.MyPostsData.AddPostData.newPostText
        }
    )
}

const AddPostDispatchToProps = (dispatch: Dispatch): AddPostDispatchToPropsType => {
    return (
        {
            addPost: () => {
                dispatch(AddPostActionCreator())
            },
            updateNewPostText: (text: string) => {
                dispatch(updateNewPostTextsActionCreator(text))

            }
        }
    )
}

export const AddPostContainer = connect(AddPostStateToProps, AddPostDispatchToProps)(AddPost)