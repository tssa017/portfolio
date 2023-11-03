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

    // Keep track of form data as user types
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (event) => {
        // Prevents default form submission behavior from making an HTTP request to the server and reloading the page
        event.preventDefault();
        // Create FormData instance to construct the required input data
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);

        // Send FormData instance to API
        axios
            .post('https://formsubmit.co/d0410c8c32eb7f50454b3a1671439d8b')
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

    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="form__container">
                    <h1 className="form__container--heading">
                        {' '}
                        {isEnglishClicked ? 'Get in touch!' : 'Échangeons !'}
                    </h1>
                    <form
                        className="form__container--form"
                        target="_blank" // Ensure that when the form is submitted, the result will open in a new browser window or tab, keeping the original page open
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder={
                                            isEnglishClicked
                                                ? 'Full name'
                                                : 'Nom / prénom'
                                        }
                                        onChange={handleInputChange} // Register input change (update fields upon data entry)
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={handleInputChange}
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
                                onChange={handleInputChange}
                                className="form-control"
                                name="message"
                                rows="10"
                                required
                            ></textarea>
                        </div>
                        <Button type="submit" className={`form__btn`}>
                            {isEnglishClicked ? 'Send 🚀' : 'Envoyer 🚀'}
                        </Button>
                    </form>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Form;
