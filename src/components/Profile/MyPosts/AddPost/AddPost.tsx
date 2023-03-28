import React, { ChangeEvent} from "react";
import s from './AddPosts.module.css';
import {AddPostPropsType} from "./AddPostContainer";

export const AddPost = (props: AddPostPropsType) => {


    const addPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text=e.currentTarget.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.Main}>
            <div className={s.textInput}>
                <textarea onChange={onChangeHandler}
                          value={props.textareaText} className={s.textarea}
                          placeholder={'What\'s new with you?'}> </textarea>
            </div>
            <button onClick={addPost} className={s.button}>Publish</button>
        </div>
    )
}
