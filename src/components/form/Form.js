import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Button from '../button/Button.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {
    const navigate = useNavigate();

    // Set attributes that will hold input values that will be posted to formsubmit API
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (event) => {
        // Prevents default form submission behavior from making an HTTP request to the server and reloading the page
        event.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            // Create FormData instance to construct the required input data
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('_captcha', false);

            // Send FormData instance to API
            axios
                .post(
                    'https://formsubmit.co/d0410c8c32eb7f50454b3a1671439d8b',
                    formDataToSend,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then((response) => {
                    if (response.status === 200) {
                        console.log('Form submitted successfully');
                    } else {
                        console.log(
                            'Form submission failed with status code:',
                            response.status
                        );
                    }
                });
            handleConfirmation();
        } else {
            console.log('Form data is invalid. Please check your inputs.');
        }
    };

    // Register form data
    const handleInputChange = (event, identifier) => {
        const { value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [identifier]: value,
        }));

        // Clear the error message when the user starts typing again
        setErrors((prevErrors) => ({
            ...prevErrors,
            [identifier]: '',
        }));
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            message: '',
        };

        if (formData.name.trim() === '') {
            newErrors.name = 'Name cannot be empty';
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Function handles logout by clearing JWT from localStorage
    const handleConfirmation = () => {
        navigate('/thanks');
    };

    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="form__container">
                    <h1 className="form__container--heading">
                        {' '}
                        {isEnglishClicked ? 'Get in touch!' : 'Échangeons !'}
                    </h1>
                    <form>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={
                                            isEnglishClicked
                                                ? 'Full name'
                                                : 'Nom / prénom'
                                        }
                                        onChange={(event) =>
                                            handleInputChange(event, 'name')
                                        } // Register input change
                                        required
                                    />
                                    {errors.name && (
                                        <span style={{ color: 'red' }}>
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={(event) =>
                                            handleInputChange(event, 'email')
                                        }
                                        required
                                    />
                                    {errors.email && (
                                        <span style={{ color: 'red' }}>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder={
                                    isEnglishClicked
                                        ? 'Your message...'
                                        : 'Votre message...'
                                }
                                onChange={(event) =>
                                    handleInputChange(event, 'message')
                                }
                                className="form-control"
                                rows="10"
                                required
                            ></textarea>
                        </div>
                        <Button
                            type="submit"
                            className={`form__btn`}
                            onClick={handleSubmit}
                        >
                            {isEnglishClicked ? 'Send 🚀' : 'Envoyer 🚀'}
                        </Button>
                    </form>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Form;
