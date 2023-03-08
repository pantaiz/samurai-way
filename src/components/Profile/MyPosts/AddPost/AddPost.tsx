import React, {useRef, TextareaHTMLAttributes, LegacyRef} from "react";
import s from './AddPosts.module.css';
import {AddPostData} from "../../../../index";


type AddPostPtopsType = {
    addPost: () => void
    AddPostData: AddPostData
    updateNewPostTexts: (newPostMessage: string) => void
}

export const AddPost = (props: AddPostPtopsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        newPostElement.current?.value && props.addPost();

    }
    return (
        <div className={s.Main}>
            <div className={s.textInput}>
                <textarea onChange={(e) => props.updateNewPostTexts(e.currentTarget.value)}
                          value={props.AddPostData.newPostText} ref={newPostElement} className={s.textarea}
                          placeholder={'What\'s new with you?'}> </textarea>
            </div>
            <button onClick={addPost} className={s.button}>Publish</button>
        </div>
    )
}