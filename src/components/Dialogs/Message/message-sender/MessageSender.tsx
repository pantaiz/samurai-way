import React, {ChangeEvent} from 'react'
import s from './MessageSender.module.css'

import {
    messageSenderType,
} from "../../../../redux/dialog-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControll";
import {maxLengthCreator, requiredField} from "../../../../utils/validators";

const maxLength100 = maxLengthCreator(100)
export type MessageSenderProps = {
    messageSenderData: messageSenderType
    sendMessage: (message: string) => void
}
export const MessageSender = (props: MessageSenderProps) => {

    const sendMessage = (messageDATA: FormDataType) => {
        props.sendMessage(messageDATA.message)
    }
    return (
        <div className={s.sendForm}>
            <DialogsReduxForm onSubmit={sendMessage}/>
        </div>
    )
}
type FormDataType = {
    message: string
}
const DialogForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={s.sendForm} onSubmit={props.handleSubmit}>
                <Field
                    type={'textarea'}
                    placeholder={'Type your message'}
                    name={'message'}
                    component={Textarea}
                    validate={[requiredField, maxLength100]}
                />
            <button className={s.button}>
                Send
            </button>
        </form>
    )
}
const DialogsReduxForm = reduxForm<FormDataType>({
    form: 'sendMessage'
})(DialogForm)