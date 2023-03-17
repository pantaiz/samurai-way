import React, {useRef, TextareaHTMLAttributes, LegacyRef, ChangeEvent} from "react";
import s from './AddPosts.module.css';
import {AddPostData, dispatchType} from "../../../../index";


type AddPostPtopsType = {

    AddPostData: AddPostData
    dispatch:dispatchType
}

export const AddPost = (props: AddPostPtopsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        newPostElement.current?.value &&props.dispatch({type:"add-Post"})
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:"update-New-Post-Texts",newPostText:e.currentTarget.value})
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