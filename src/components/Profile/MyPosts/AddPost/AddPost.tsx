import React, { ChangeEvent} from "react";
import s from './AddPosts.module.css';
import {AddPostData, dispatchType} from "../../../../index";
import {AddPostActionCreator, updateNewPostTextsActionCreator} from "../../../../redux/profile-reducer";


type AddPostPtopsType = {
    updateNEwPostText:(text:string)=>void
    addPost:()=>void
    textareaText:string
}

export const AddPost = (props: AddPostPtopsType) => {


    const addPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text=e.currentTarget.value
        props.updateNEwPostText(text)
      //  const action=updateNewPostTextsActionCreator(text)
       // props.dispatch(action)
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
