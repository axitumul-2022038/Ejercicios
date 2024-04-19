import { useState } from "react";
import { Input } from "./input.jsx";

export const Register = ({ switchAuthHandler }) => {
    const isSubmitButtonDisabled = false;

    const handleRegister = async (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field) => {

    }

    const [formData, setFormData] = useState(
        {
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            username: {
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            }
        }
    )

    return (
        <div className="register-container">
            <form
                className="auth-form"
                onSubmit={handleRegister}
            >
                <Input
                    field='email'
                    label='Email'
                    value={formData.email.value}
                    onChangeHandler={handleValueChange}
                    type='email'
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                />
                <button
                    disabled={isSubmitButtonDisabled}
                >
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler}>
                ¿Ya tienes una cuenta? ¡Inicia sesión acá!
            </span>
        </div>
    )
}