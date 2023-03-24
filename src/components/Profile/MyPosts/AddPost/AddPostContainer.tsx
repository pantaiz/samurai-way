import React, { ChangeEvent} from "react";
import s from './AddPosts.module.css';
import {AddPostData, dispatchType} from "../../../../index";
import {AddPostActionCreator, updateNewPostTextsActionCreator} from "../../../../redux/profile-reducer";


type AddPostPtopsType = {

    AddPostData: AddPostData
    dispatch:dispatchType
}

export const AddPost = (props: AddPostPtopsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        const action=AddPostActionCreator()
        newPostElement.current?.value &&props.dispatch(action)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const action=updateNewPostTextsActionCreator(e.currentTarget.value)
        props.dispatch(action)
    }
    return (
        <div className={s.Main}>
            <div className={s.textInput}>
                <textarea onChange={onChangeHandler}
                          value={props.AddPostData.newPostText} ref={newPostElement} className={s.textarea}
                          placeholder={'What\'s new with you?'}> </textarea>
            </div>
            <button onClick={addPost} className={s.button}>Publish</button>
        </div>
    )
}
