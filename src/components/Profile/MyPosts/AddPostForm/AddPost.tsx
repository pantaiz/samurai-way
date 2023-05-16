import React, { ChangeEvent} from "react";
import s from './AddPosts.module.css';
import {AddPostPropsType} from "./AddPostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const AddPost = (props: AddPostPropsType) => {


    const addPost = (postMessageDATA:FormDataType) => {
        props.addPost(postMessageDATA.postMessage)
    }

    return (
        <div className={s.Main}>
                <AddPostReduxForm onSubmit={addPost}/>
        </div>
    )
}
type FormDataType={
    postMessage:string
}
const AddPostForm: React.FC<InjectedFormProps<FormDataType> > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textInput}>
                <Field className={s.textarea}
                       placeholder={'What\'s new with you?'}
                       name={'postMessage'} component={"textarea"}/>
            </div>
            <button className={s.button}>Publish</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'addPost'
})(AddPostForm)