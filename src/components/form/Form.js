import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Button from '../button/Button.js';

function Form() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div class="form__container">
                    <h1 class="form__container--heading">
                        {' '}
                        {isEnglishClicked ? 'Get in touch!' : 'Échangeons !'}
                    </h1>
                    <form
                        class="form__container--form"
                        target="_blank"
                        action="https://formsubmit.co/d0410c8c32eb7f50454b3a1671439d8b"
                        method="POST"
                    >
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">
                                    <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        placeholder={
                                            isEnglishClicked
                                                ? 'Full name'
                                                : 'Nom / prénom'
                                        }
                                        required
                                    />
                                </div>
                                <div class="col">
                                    <input
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea
                                placeholder={
                                    isEnglishClicked
                                        ? 'Your message...'
                                        : 'Votre message...'
                                }
                                class="form-control"
                                name="message"
                                rows="10"
                                required
                            ></textarea>
                        </div>
                        <Button className={`form__btn`}>
                            {isEnglishClicked ? 'Send 🚀' : 'Envoyer 🚀'}
                        </Button>
                    </form>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Form;
