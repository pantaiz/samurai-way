import React from "react";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'}  component={"input"}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"checkbox"} component={"input"}/> remember me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = () => {
    return (<div className={s.banner}>
            <LoginReduxForm/>
        </div>
    )

}
export default Login

