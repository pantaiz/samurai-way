import React from "react";
import s from './Login.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CustomInput} from "../common/FormsControls/FormsControll";
import {requiredField} from "../../utils/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type={'input'}
                    validate={[requiredField]}
                    placeholder={'login'}
                    name={'login'}
                     component={CustomInput}/>
            </div>
            <div>
                <Field
                    type={'input'}
                    placeholder={'password'}
                    validate={[requiredField]}
                    name={'password'}
                    component={CustomInput}/>
            </div>
            <div>
                <Field

                    type={"checkbox"}
                    name={"checkbox"}
                    component={'input'}/> remember me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (<div className={s.banner}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
export default Login

