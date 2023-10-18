import '../../index.scss';
import LanguageContext from '../language/LanguageContext';
import Paragraph from '../paragraph/Paragraph.js';
// import Button from '../button/Button';

function Bio() {
    return (
        <LanguageContext.Consumer>
            {({ isEnglishClicked }) => (
                <div className="bio" id="bio">
                    <h2>
                        {' '}
                        {isEnglishClicked ? 'About me' : 'À propos de moi'}
                    </h2>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I started teaching myself how to code my literary magazine with HTML and CSS, and soon became hooked.'
                            : "J'ai commencé à apprendre à coder moi-même mon magazine littéraire avec HTML et CSS, et je suis rapidement devenue passionée."}
                    </Paragraph>
                    <Paragraph className="bio__para">
                        {isEnglishClicked
                            ? 'I speak French and English, love to read, and am interested in cyber security. Looking forward to continue building accessible, secure web applications!'
                            : "Je parle français et anglais, j'aime lire et je m'intéresse à la cybersécurité. J'ai hâte de continuer à construire des applications web accessibles et sécurisées !"}
                    </Paragraph>
                    {/* <div class="cv" id="cv">
                        {isEnglishClicked ? (
                            <a
                                download=""
                                href="pdf/CV_June_2023_compressed.pdf"
                                aria-label="Link to Token to Theressa Malone CV"
                            >
                                <Button className="cv__btn">
                                    Download my CV!
                                </Button>
                            </a>
                        ) : (
                            <a
                                download=""
                                href="pdf/CV_juin_2023_compressed.pdf"
                                aria-label="Link to Token to Theressa Malone CV"
                            >
                                <Button className="cv__btn">
                                    Télécharger mon CV !
                                </Button>
                            </a>
                        )}
                    </div> */}
                </div>
            )}
        </LanguageContext.Consumer>
    );
}

export default Bio;
