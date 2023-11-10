import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Button from '../button/Button.js';
import { useState } from 'react';
import axios from 'axios';

function Form() {
    // Set attributes that will hold input values that will be posted to formsubmit API
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (event) => {
        // Prevents default form submission behavior from making an HTTP request to the server and reloading the page
        event.preventDefault();
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
    };

    // Keep track of form data as user types
    const handleInputChange = (event, identifier) => {
        const { value } = event.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [identifier]: value,
        }));
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
                                        } // Register input change (update fields upon data entry)
                                        required
                                    />
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
                            target="_blank"
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
