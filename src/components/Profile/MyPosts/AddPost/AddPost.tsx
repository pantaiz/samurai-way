import React, {useRef, TextareaHTMLAttributes, LegacyRef} from "react";
import s from './AddPosts.module.css';


type AddPostPtopsType = {
    addPost: (postMessage: string) => void
}

export const AddPost = (props: AddPostPtopsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let text = newPostElement.current?.value
        text && props.addPost(text)

    }
    return (
        <div className={s.Main}>
            <div className={s.textInput}>
                <textarea ref={newPostElement} className={s.textarea} placeholder={'What\'s new with you?'}></textarea>
            </div>
            <button onClick={addPost} className={s.button}>Publish</button>
        </div>
    )
}