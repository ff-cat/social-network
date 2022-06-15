import React from "react";
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => console.log(formData)

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        placeholder='Login'
                        name='login'
                        validate={[requiredField]}
                            />
                </div>
                <div>
                    <Field
                        component={Input}
                        placeholder='Password'
                        name='password'
                        type='password'
                        validate={[requiredField]}
                    />
                </div>
                <div className={s.remember}>
                    <Field
                        component={Input}
                        type='checkbox'
                        name='rememberMe'
                    /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
