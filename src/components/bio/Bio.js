import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Button from '../button/Button.js';
import Paragraph from '../paragraph/Paragraph.js';

function Bio() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="bio">
                    <img
                        src="images/avatar.png"
                        className="bio__img"
                        alt="avatar"
                    ></img>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I started learning to code so that I could optimise the layout of my online literary magazine in HTML and CSS. I quickly became interested in programming, and began to develop my portfolio with Full-Stack projects.'
                            : "J'ai commencé à apprendre à coder afin d'optimiser la mise en page de mon magazine littéraire en ligne en HTML et CSS. Je me suis rapidement intéressée à la programmation et j'ai commencé à développer mon portefeuille avec des projets Full-Stack."}
                    </Paragraph>
                    <a href="mailto:theressadmalone@gmail.com" target="blank">
                        {' '}
                        <Button className={`bio__btn`}>
                            {isEnglishClicked ? 'Say hi 👋' : 'Échangeons 👋'}
                        </Button>
                    </a>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
