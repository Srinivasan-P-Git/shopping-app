import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const onChangeHandler = e => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={() => { }}>
                <FormInput
                    labelOptions={{ label: "Email ID" }}
                    inputOptions={{ type: "email", required: true, name: "email", onChange: onChangeHandler, value: email }}
                />
                <FormInput
                    labelOptions={{ label: "Password" }}
                    inputOptions={{ type: "password", required: true, name: "password", onChange: onChangeHandler, value: password }}
                />
                <div className="buttons-container">
                    <Button type={"submit"}>Sign In</Button>
                    <Button type={"button"} buttonStyle={"google"}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;