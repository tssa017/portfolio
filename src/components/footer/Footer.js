import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph.js';

function Footer() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div>
                    <footer className="footer">
                        <Paragraph>
                            {isEnglishClicked
                                ? '© Theressa Malone, 2023 | Built in React'
                                : '© Theressa Malone, 2023 | Construit en React'}
                        </Paragraph>
                    </footer>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Footer;
