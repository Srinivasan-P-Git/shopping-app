import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const onChangeHandler = e => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email</span>
            <form onSubmit={(e) => { e.preventDefault(); console.dir(formFields) }}>
                <FormInput
                    labelOptions={{ label: "Display Name" }}
                    inputOptions={{ required: true, type: "text", name: "displayName", value: displayName, onChange: onChangeHandler }}
                />
                <FormInput
                    labelOptions={{ label: "Email ID" }}
                    inputOptions={{ required: true, type: "email", name: "email", value: email, onChange: onChangeHandler }}
                />
                <FormInput
                    labelOptions={{ label: "Password" }}
                    inputOptions={{ required: true, type: "password", name: "password", value: password, onChange: onChangeHandler }}
                />
                <FormInput
                    labelOptions={{ label: "Confirm Password" }}
                    inputOptions={{ required: true, type: "password", name: "confirmPassword", value: confirmPassword, onChange: onChangeHandler }}
                />
                <Button type={"submit"}>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;